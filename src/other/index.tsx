// 报表导出
export const reportExport = (resp: any, fileName: string, blobOptions = {}, withBom = false) => {
  function exportOperate() {
      let localHref = withBom
          ? window.URL.createObjectURL(new Blob(['\uFEFF' + resp], blobOptions))
          : window.URL.createObjectURL(new Blob([resp], blobOptions));
      let ele = document.createElement('a');

      ele.href = localHref;
      ele.download = fileName;
      document.querySelectorAll('body')[0].appendChild(ele);
      ele.click();

      setTimeout(() => {
          ele.remove();
          URL.revokeObjectURL(localHref);
      }, 1000);
  }

  exportOperate();

  // catchBlobError(resp, exportOperate);
};

export function catchBlobError(resp: any, cb: () => void) {
  if (resp instanceof Blob) {
      const reader = new FileReader();

      reader.readAsText(resp, 'utf-8');

      // eslint-disable-next-line
      reader.onload = function () {
          try {
              // @ts-ignore
              const blobRes = JSON.parse(this.result);

              if (blobRes.errcode && blobRes.errmsg) {
                  return message.error(blobRes.errmsg);
              }
          } catch (error) {
              cb && cb();
          }

          return;
      };
  } else {
      cb && cb();
  }
}