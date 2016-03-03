/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_violetpipe2_ = 0;
var arrID_violetpipe2_ = [1, 2];
var arrFile_violetpipe2_ = ["1", "2"];
var bUseWHString_violetpipe2_ = false;
var arrWString_violetpipe2_ = ["1", "2"];
var arrHString_violetpipe2_ = ["1", "2"];
var nActiveID_violetpipe2_Index_violetpipe2_ = 0;
var nActiveID_violetpipe2_ = 0;

var timerPreview_violetpipe2_ = 0;
var nIndexPreview_violetpipe2_ = 0;
var nIndexPreviewLast_violetpipe2_ = -1;
var nWidth_violetpipe2_ = 0;
var nHeight_violetpipe2_ = 0;
var nSpeed_violetpipe2_ = 500;
var strYMD_violetpipe2_ = "";
var strHour_violetpipe2_ = "";
var strFolder_violetpipe2_ = "";
var nHomeFolder_violetpipe2_ = 1;
var newimages_violetpipe2_ = [];

function Animate_violetpipe2_() {
    if (nIDNum_violetpipe2_ <= 0)return;

    var strDivName_violetpipe2_ = "";
    if (nIndexPreviewLast_violetpipe2_ != -1) {
        strDivName_violetpipe2_ = "p_violetpipe2_" + nIndexPreviewLast_violetpipe2_.toString();
        document.getElementById(strDivName_violetpipe2_).style.visibility = 'hidden';
    }

    var nIndex = arrID_violetpipe2_[nIndexPreview_violetpipe2_] - 1;
    strDivName_violetpipe2_ = "p_violetpipe2_" + nIndex.toString();
    document.getElementById(strDivName_violetpipe2_).style.visibility = 'visible';

    nIndexPreviewLast_violetpipe2_ = nIndex;

    nIndexPreview_violetpipe2_++;
    if (nIndexPreview_violetpipe2_ >= nIDNum_violetpipe2_) {
        nIndexPreview_violetpipe2_ = 0;
        StopAnimate_violetpipe2_();
    } else {
        timerPreview_violetpipe2_ = setTimeout("Animate_violetpipe2_()", nSpeed_violetpipe2_);
    }
}

function StopAnimate_violetpipe2_() {
    clearTimeout(timerPreview_violetpipe2_);
    timerPreview_violetpipe2_ = 0;
}


var isVioletPipe2Active = false;
function startVioletPipe2(){
    if(!isVioletPipe2Active){
        ReadOrder_violetpipe2_(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        Preview_violetpipe2_();
        isVioletPipe2Active = !isVioletPipe2Active;
    }
}
function stopVioletPipe2(){
    if(isVioletPipe2Active){
        ReadOrder_violetpipe2_(60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10, 9, 8, 7, 6, 5, 4, 3, 2, 1);
        Preview_violetpipe2_();
        isVioletPipe2Active = !isVioletPipe2Active;
    }
}
//var violetpipe2_State = false;
//function StartStopAnimate_violetpipe2_() {
//    violetpipe2_State = !violetpipe2_State;
//    if(violetpipe2_State){
//        ReadOrder_violetpipe2_(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//        Preview_violetpipe2_()
//    } else{
//        ReadOrder_violetpipe2_(60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10, 9, 8, 7, 6, 5, 4, 3, 2, 1);
//        Preview_violetpipe2_()
//    }
//}

/*
 function SetFolderName( strDir )
 {
 strFolder_violetpipe2_ = strDir;
 }*/

function SetFolderName_violetpipe2_(strDir1, strDir2, strDir3) {
    strYMD_violetpipe2_ = strDir1;
    strHour_violetpipe2_ = strDir2;
    strFolder_violetpipe2_ = strDir3;
}

function SetHomeFolder_violetpipe2_(nDir) {
    nHomeFolder_violetpipe2_ = nDir;
}

function GetFolderName_violetpipe2_() {
    return strFolder_violetpipe2_;
}

function InitPreview_violetpipe2_() {
    var i = 0;
    var strHTML_violetpipe2_ = "";
    var dir_name = GetFolderName_violetpipe2_();

    var strWidth = nWidth_violetpipe2_.toString();
    strWidth += "px";
    var strHeight = nHeight_violetpipe2_.toString();
    strHeight += "px";

    var strFolder_violetpipe2_Funny62 = strFolder_violetpipe2_.substring(0, 1);

    $("preview_box_violetpipe2_").style.visibility = "hidden";

    var nPicNum_violetpipe2_ = 0;

    for (i = 0; i < nIDNum_violetpipe2_; i++) {
        var strDivName_violetpipe2_ = "p_violetpipe2_" + i.toString();
        var strImgName_violetpipe2_ = "pic_violetpipe2_" + i.toString();

        var strImg0 = "";

        newimages_violetpipe2_[i] = new Image();

        if (nHomeFolder_violetpipe2_ == 1)
            //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_violetpipe2_ + "/" + strHour_violetpipe2_ + "/" + strFolder_violetpipe2_ + "/" + arrFile_violetpipe2_[i];
            strImg0 = "img/VioletPipe2/" +arrFile_violetpipe2_[i];
        else if (nHomeFolder_violetpipe2_ == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_violetpipe2_ + "/" + strHour_violetpipe2_ + "/" + strFolder_violetpipe2_ + "/" + arrFile_violetpipe2_[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_violetpipe2_Funny62 + "/" + strFolder_violetpipe2_ + "/" + arrFile_violetpipe2_[i];

        if (!bUseWHString_violetpipe2_)
            //strHTML_violetpipe2_ += '<div id="' + strDivName_violetpipe2_ + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_violetpipe2_ + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_violetpipe2_ += '<div id="' + strDivName_violetpipe2_ + '" class="liquid"' + '<img id="' + strImgName_violetpipe2_ + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_violetpipe2_[i];
            var nPicH = arrHString_violetpipe2_[i];


            //nWidth_violetpipe2_, nHeight_violetpipe2_

            if (nPicW == nWidth_violetpipe2_ && nPicH == nHeight_violetpipe2_) {
                strHTML_violetpipe2_ += '<div id="' + strDivName_violetpipe2_ + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_violetpipe2_ + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_violetpipe2_ / nHeight_violetpipe2_;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_violetpipe2_;
                    nNewH = parseInt(nPicH * nWidth_violetpipe2_ / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_violetpipe2_;
                    nNewW = parseInt(nPicW * nHeight_violetpipe2_ / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_violetpipe2_ - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_violetpipe2_ - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_violetpipe2_ += '<div id="' + strDivName_violetpipe2_ + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_violetpipe2_ + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_violetpipe2_ += '<div id="' + strDivName_violetpipe2_ + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_violetpipe2_ + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_violetpipe2_[i].src = strImg0;
        newimages_violetpipe2_[i].onload = function () {

            nPicNum_violetpipe2_++;
            if (nPicNum_violetpipe2_ == nIDNum_violetpipe2_)
                OnLoadAllPics_violetpipe2_();
            else {
                var nPercent = Math.floor(nPicNum_violetpipe2_ / nIDNum_violetpipe2_ * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_violetpipe2_;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_violetpipe2_() {
    for (var i = 0; i < nIDNum_violetpipe2_; i++) {
        var strDivName_violetpipe2_ = "p_violetpipe2_" + i.toString();
        var strImgName_violetpipe2_ = "pic_violetpipe2_" + i.toString();

        $(strImgName_violetpipe2_).src = newimages_violetpipe2_[i].src;
        $(strDivName_violetpipe2_).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_violetpipe2_.toString();
    strHeight += "px";
    $("preview_box_violetpipe2_").style.height = strHeight;

    $("preview_box_violetpipe2_").style.visibility = "visible";
    document.getElementById("p_violetpipe2_0").style.visibility = 'visible';
    if (violetpipe2_State)
        Preview_violetpipe2_();
}

function Preview_violetpipe2_() {
    StopAnimate_violetpipe2_();
    Animate_violetpipe2_();
}

function ResetImgNumber_violetpipe2_(n) {
    arrID_violetpipe2_.length = n;
    nIDNum_violetpipe2_ = n;
}

function DisplayImages_violetpipe2_() {
    InitPreview_violetpipe2_();
}

function ReadFileName_violetpipe2_(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_violetpipe2_ = nNum;
        arrFile_violetpipe2_.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_violetpipe2_[i] = arguments[i];
        }

        ResetImgNumber_violetpipe2_(nNum);
    }
}


function ReadWHString_violetpipe2_(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_violetpipe2_ = true;
        arrWString_violetpipe2_.length = nNum / 2;
        arrHString_violetpipe2_.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_violetpipe2_[i / 2] = arguments[i];
            arrHString_violetpipe2_[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_violetpipe2_(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_violetpipe2_) {
            for (var i = 0; i < nNum; i++)
                arrID_violetpipe2_[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_violetpipe2_; i++)
                arrID_violetpipe2_[i] = i + 1;
        }
    }
}

function ReadWHS_violetpipe2_(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_violetpipe2_ = arguments[0];
        nHeight_violetpipe2_ = arguments[1];
        nSpeed_violetpipe2_ = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
