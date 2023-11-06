// // import
// import { FileUploader } from "react-drag-drop-files";

// // image list 관리
// const [imageList, setImageList] = useState<File[]>([]);

// // image 추가 시 핸들링 함수
// const imageRegistHandler = (files: File[]) => {
//   let tempImagelist = [...imageList];
//   for (let i = 0; i < files.length; i++) {
//     tempImagelist.push(files[i]);
//   }
//   setImageList(tempImagelist);
// };

// // 렌더링 파트
// <ul className={styles.imageRegistWrap}>
//   {imageList.map((image, index) => {
//     return (
//       <li key={index} className={styles.imageRegistItem}>
//         <div className={styles.imageRegistItemCover}>
//           <MdClose onClick={() => imageDeleteHandler(index)} />
//         </div>
//         <img
//           alt="갤러리 이미지"
//           src={URL.createObjectURL(image)}
//         />
//       </li>
//     );
//   })}
//   <FileUploader
//     handleChange={imageRegistHandler}
//     name="file"
//     types={fileTypes}
//     multiple={true}
//     hoverTitle="놓으세요!"
//     onDraggingStateChange={(dragging: boolean) =>
//       setIsDrag(dragging)
//     }
//   >
//     <button type="button" className={styles.BtnImageRegist}>
//       {!isDrag && <MdUploadFile />}
//     </button>
//   </FileUploader>
// </ul>

