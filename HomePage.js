var ImageArray = [];

    ImageArray[0] = "http://127.0.0.1:5501/notebook.svg";
    ImageArray[1] = "http://127.0.0.1:5501/onlinetest.svg";
    ImageArray[2] = "http://127.0.0.1:5501/question.svg";
    ImageArray[3] = "http://127.0.0.1:5501/exam.svg"


var time = 3000;
var i =0;
function ChangeImg()
{
    // Getting element by name of element
    document.imageSlide.src = ImageArray[i];
    if(i<ImageArray.length-1)
    {
        i++;
    }
    else
    {
        i=0;
    }
    console.log(ImageArray[i]);

    setTimeout('ChangeImg()',time);
}

window.onload = ChangeImg;



