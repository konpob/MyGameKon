const images = [
  "KK/KKK/logo1.PNG","KK/KKK/logo2.PNG","KK/KKK/logo3.PNG","KK/KKK/logo4.PNG","KK/KKK/logo5.PNG","KK/KKK/logo6.PNG","KK/KKK/logo7.PNG","KK/KKK/logo8.PNG",
  "KK/KKK/logo9.PNG","KK/KKK/logo10.PNG","KK/KKK/logo11.PNG","KK/KKK/logo12.PNG","KK/KKK/logo13.PNG","KK/KKK/logo14.PNG","KK/KKK/logo15.PNG","KK/KKK/logo16.PNG",
  "KK/KKK/logo17.PNG","KK/KKK/logo18.PNG","KK/KKK/logo19.PNG","KK/KKK/logo20.PNG","KK/KKK/logo21.PNG","KK/KKK/logo22.PNG","KK/KKK/logo23.PNG","KK/KKK/logo24.PNG",
  "KK/KKK/logo25.PNG","KK/KKK/logo26.PNG","KK/KKK/logo27.PNG","KK/KKK/logo28.PNG","KK/KKK/logo29.PNG","KK/KKK/logo30.PNG","KK/KKK/logo31.PNG","KK/KKK/logo32.PNG",
  "KK/KKK/logo33.PNG","KK/KKK/logo34.PNG","KK/KKK/logo35.PNG","KK/KKK/logo36.PNG","KK/KKK/logo37.PNG","KK/KKK/logo38.PNG","KK/KKK/logo39.PNG","KK/KKK/logo40.PNG",
  "KK/KKK/logo41.PNG","KK/KKK/logo42.PNG","KK/KKK/logo43.PNG","KK/KKK/logo44.PNG","KK/KKK/logo45.PNG","KK/KKK/logo46.PNG","KK/KKK/logo47.PNG","KK/KKK/logo48.PNG",
  "KK/KKK/logo49.PNG","KK/KKK/logo50.PNG","KK/KKK/logo51.PNG","KK/KKK/logo52.PNG","KK/KKK/logo53.PNG","KK/KKK/logo54.PNG","KK/KKK/logo55.PNG","KK/KKK/logo56.PNG",
  "KK/KKK/logo57.PNG","KK/KKK/logo58.PNG","KK/KKK/logo59.PNG","KK/KKK/logo60.PNG","KK/KKK/logo61.PNG","KK/KKK/logo62.PNG","KK/KKK/logo63.PNG","KK/KKK/logo64.PNG",
  "KK/KKK/logo65.PNG","KK/KKK/logo66.PNG","KK/KKK/logo67.PNG","KK/KKK/logo68.PNG","KK/KKK/logo69.PNG","KK/KKK/logo70.PNG","KK/KKK/logo71.PNG","KK/KKK/logo72.PNG",
  "KK/KKK/logo73.PNG","KK/KKK/logo74.PNG","KK/KKK/logo75.PNG","KK/KKK/logo76.PNG","KK/KKK/logo77.PNG",
];

const displayedImages = []; // เพิ่ม array เก็บรูปภาพที่ถูกแสดงแล้ว

function displayImage(imagePath) {
  const imageContainer = document.getElementById('imgElement');

  // เพิ่มเส้นทางรูปภาพลงใน displayedImages
  displayedImages.push(imagePath);

  // ตรวจสอบว่าเมื่อเพิ่มเส้นทางรูปภาพลงใน displayedImages ทำให้ครบ 9 รูปหรือไม่
  if (displayedImages.length === 9) {
    // ถ้าครบ 9 รูป, ให้ลบรูปเก่าสุด 1 รูป
    displayedImages.shift();
  }

  // แสดงรูปภาพทั้งหมด
  imageContainer.src = displayedImages[displayedImages.length - 1];
}

function showNextImage() {
  if (images.length > 0) {
    const nextImage = images.shift();
    displayImage(nextImage);
  } else {
    displayImage("KK/KKK/logo.PNG"); // รูปภาพ placeholder หากไม่มีรูปภาพเพิ่มเติม
  }
}

// document.body.addEventListener("click", function() {
//   showNextImage();
// });
