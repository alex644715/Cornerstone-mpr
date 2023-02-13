const scheme = 'wadouri';
const base = 'http://localhost:9000/studies';
const seriesNumber = 0;

// 读取DICOM文件
export default function(imageId){
    return `${scheme}:${base}/${seriesNumber}/${imageId}`
}