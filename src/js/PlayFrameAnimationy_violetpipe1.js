/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_violetpipe1_ = 0;
var arrID_violetpipe1_ = [1, 2];
var arrFile_violetpipe1_ = ["1", "2"];
var bUseWHString_violetpipe1_ = false;
var arrWString_violetpipe1_ = ["1", "2"];
var arrHString_violetpipe1_ = ["1", "2"];
var nActiveID_violetpipe1_Index_violetpipe1_ = 0;
var nActiveID_violetpipe1_ = 0;

var timerPreview_violetpipe1_ = 0;
var nIndexPreview_violetpipe1_ = 0;
var nIndexPreviewLast_violetpipe1_ = -1;
var nWidth_violetpipe1_ = 0;
var nHeight_violetpipe1_ = 0;
var nSpeed_violetpipe1_ = 500;
var strYMD_violetpipe1_ = "";
var strHour_violetpipe1_ = "";
var strFolder_violetpipe1_ = "";
var nHomeFolder_violetpipe1_ = 1;
var newimages_violetpipe1_ = [];

function Animate_violetpipe1_() {
    if (nIDNum_violetpipe1_ <= 0)return;

    var strDivName_violetpipe1_ = "";
    if (nIndexPreviewLast_violetpipe1_ != -1) {
        strDivName_violetpipe1_ = "p_violetpipe1_" + nIndexPreviewLast_violetpipe1_.toString();
        document.getElementById(strDivName_violetpipe1_).style.visibility = 'hidden';
    }

    var nIndex = arrID_violetpipe1_[nIndexPreview_violetpipe1_] - 1;
    strDivName_violetpipe1_ = "p_violetpipe1_" + nIndex.toString();
    document.getElementById(strDivName_violetpipe1_).style.visibility = 'visible';

    nIndexPreviewLast_violetpipe1_ = nIndex;

    nIndexPreview_violetpipe1_++;
    if (nIndexPreview_violetpipe1_ >= nIDNum_violetpipe1_) {
        nIndexPreview_violetpipe1_ = 0;
        StopAnimate_violetpipe1_();
    } else {
        timerPreview_violetpipe1_ = setTimeout("Animate_violetpipe1_()", nSpeed_violetpipe1_);
    }
}

function StopAnimate_violetpipe1_() {
    clearTimeout(timerPreview_violetpipe1_);
    timerPreview_violetpipe1_ = 0;
}

var violetpipe1_State = false;
function StartStopAnimate_violetpipe1_() {
    violetpipe1_State = !violetpipe1_State;
    if(violetpipe1_State){
        ReadOrder_violetpipe1_(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        Preview_violetpipe1_()
    } else{
        ReadOrder_violetpipe1_(60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10, 9, 8, 7, 6, 5, 4, 3, 2, 1);
        Preview_violetpipe1_()
    }
}

/*
 function SetFolderName( strDir )
 {
 strFolder_violetpipe1_ = strDir;
 }*/

function SetFolderName_violetpipe1_(strDir1, strDir2, strDir3) {
    strYMD_violetpipe1_ = strDir1;
    strHour_violetpipe1_ = strDir2;
    strFolder_violetpipe1_ = strDir3;
}

function SetHomeFolder_violetpipe1_(nDir) {
    nHomeFolder_violetpipe1_ = nDir;
}

function GetFolderName_violetpipe1_() {
    return strFolder_violetpipe1_;
}

function InitPreview_violetpipe1_() {
    var i = 0;
    var strHTML_violetpipe1_ = "";
    var dir_name = GetFolderName_violetpipe1_();

    var strWidth = nWidth_violetpipe1_.toString();
    strWidth += "px";
    var strHeight = nHeight_violetpipe1_.toString();
    strHeight += "px";

    var strFolder_violetpipe1_Funny62 = strFolder_violetpipe1_.substring(0, 1);

    $("preview_box_violetpipe1_").style.visibility = "hidden";

    var nPicNum_violetpipe1_ = 0;

    for (i = 0; i < nIDNum_violetpipe1_; i++) {
        var strDivName_violetpipe1_ = "p_violetpipe1_" + i.toString();
        var strImgName_violetpipe1_ = "pic_violetpipe1_" + i.toString();

        var strImg0 = "";

        newimages_violetpipe1_[i] = new Image();

        if (nHomeFolder_violetpipe1_ == 1)
            //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_violetpipe1_ + "/" + strHour_violetpipe1_ + "/" + strFolder_violetpipe1_ + "/" + arrFile_violetpipe1_[i];
            strImg0 = "img/VioletPipe1/" +arrFile_violetpipe1_[i];
        else if (nHomeFolder_violetpipe1_ == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_violetpipe1_ + "/" + strHour_violetpipe1_ + "/" + strFolder_violetpipe1_ + "/" + arrFile_violetpipe1_[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_violetpipe1_Funny62 + "/" + strFolder_violetpipe1_ + "/" + arrFile_violetpipe1_[i];

        if (!bUseWHString_violetpipe1_)
            //strHTML_violetpipe1_ += '<div id="' + strDivName_violetpipe1_ + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_violetpipe1_ + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_violetpipe1_ += '<div id="' + strDivName_violetpipe1_ + '" class="liquid"' + '<img id="' + strImgName_violetpipe1_ + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_violetpipe1_[i];
            var nPicH = arrHString_violetpipe1_[i];


            //nWidth_violetpipe1_, nHeight_violetpipe1_

            if (nPicW == nWidth_violetpipe1_ && nPicH == nHeight_violetpipe1_) {
                strHTML_violetpipe1_ += '<div id="' + strDivName_violetpipe1_ + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_violetpipe1_ + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_violetpipe1_ / nHeight_violetpipe1_;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_violetpipe1_;
                    nNewH = parseInt(nPicH * nWidth_violetpipe1_ / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_violetpipe1_;
                    nNewW = parseInt(nPicW * nHeight_violetpipe1_ / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_violetpipe1_ - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_violetpipe1_ - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_violetpipe1_ += '<div id="' + strDivName_violetpipe1_ + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_violetpipe1_ + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_violetpipe1_ += '<div id="' + strDivName_violetpipe1_ + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_violetpipe1_ + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_violetpipe1_[i].src = strImg0;
        newimages_violetpipe1_[i].onload = function () {

            nPicNum_violetpipe1_++;
            if (nPicNum_violetpipe1_ == nIDNum_violetpipe1_)
                OnLoadAllPics_violetpipe1_();
            else {
                var nPercent = Math.floor(nPicNum_violetpipe1_ / nIDNum_violetpipe1_ * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_violetpipe1_;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_violetpipe1_() {
    for (var i = 0; i < nIDNum_violetpipe1_; i++) {
        var strDivName_violetpipe1_ = "p_violetpipe1_" + i.toString();
        var strImgName_violetpipe1_ = "pic_violetpipe1_" + i.toString();

        $(strImgName_violetpipe1_).src = newimages_violetpipe1_[i].src;
        $(strDivName_violetpipe1_).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_violetpipe1_.toString();
    strHeight += "px";
    $("preview_box_violetpipe1_").style.height = strHeight;

    $("preview_box_violetpipe1_").style.visibility = "visible";
    document.getElementById("p_violetpipe1_0").style.visibility = 'visible';
    if (violetpipe1_State)
        Preview_violetpipe1_();
}

function Preview_violetpipe1_() {
    StopAnimate_violetpipe1_();
    Animate_violetpipe1_();
}

function ResetImgNumber_violetpipe1_(n) {
    arrID_violetpipe1_.length = n;
    nIDNum_violetpipe1_ = n;
}

function DisplayImages_violetpipe1_() {
    InitPreview_violetpipe1_();
}

function ReadFileName_violetpipe1_(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_violetpipe1_ = nNum;
        arrFile_violetpipe1_.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_violetpipe1_[i] = arguments[i];
        }

        ResetImgNumber_violetpipe1_(nNum);
    }
}


function ReadWHString_violetpipe1_(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_violetpipe1_ = true;
        arrWString_violetpipe1_.length = nNum / 2;
        arrHString_violetpipe1_.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_violetpipe1_[i / 2] = arguments[i];
            arrHString_violetpipe1_[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_violetpipe1_(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_violetpipe1_) {
            for (var i = 0; i < nNum; i++)
                arrID_violetpipe1_[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_violetpipe1_; i++)
                arrID_violetpipe1_[i] = i + 1;
        }
    }
}

function ReadWHS_violetpipe1_(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_violetpipe1_ = arguments[0];
        nHeight_violetpipe1_ = arguments[1];
        nSpeed_violetpipe1_ = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
