/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_violetpipe3_ = 0;
var arrID_violetpipe3_ = [1, 2];
var arrFile_violetpipe3_ = ["1", "2"];
var bUseWHString_violetpipe3_ = false;
var arrWString_violetpipe3_ = ["1", "2"];
var arrHString_violetpipe3_ = ["1", "2"];
var nActiveID_violetpipe3_Index_violetpipe3_ = 0;
var nActiveID_violetpipe3_ = 0;

var timerPreview_violetpipe3_ = 0;
var nIndexPreview_violetpipe3_ = 0;
var nIndexPreviewLast_violetpipe3_ = -1;
var nWidth_violetpipe3_ = 0;
var nHeight_violetpipe3_ = 0;
var nSpeed_violetpipe3_ = 500;
var strYMD_violetpipe3_ = "";
var strHour_violetpipe3_ = "";
var strFolder_violetpipe3_ = "";
var nHomeFolder_violetpipe3_ = 1;
var newimages_violetpipe3_ = [];

function Animate_violetpipe3_() {
    if (nIDNum_violetpipe3_ <= 0)return;

    var strDivName_violetpipe3_ = "";
    if (nIndexPreviewLast_violetpipe3_ != -1) {
        strDivName_violetpipe3_ = "p_violetpipe3_" + nIndexPreviewLast_violetpipe3_.toString();
        document.getElementById(strDivName_violetpipe3_).style.visibility = 'hidden';
    }

    var nIndex = arrID_violetpipe3_[nIndexPreview_violetpipe3_] - 1;
    strDivName_violetpipe3_ = "p_violetpipe3_" + nIndex.toString();
    document.getElementById(strDivName_violetpipe3_).style.visibility = 'visible';

    nIndexPreviewLast_violetpipe3_ = nIndex;

    nIndexPreview_violetpipe3_++;
    if (nIndexPreview_violetpipe3_ >= nIDNum_violetpipe3_) {
        nIndexPreview_violetpipe3_ = 0;
        StopAnimate_violetpipe3_();
    } else {
        timerPreview_violetpipe3_ = setTimeout("Animate_violetpipe3_()", nSpeed_violetpipe3_);
    }
}

function StopAnimate_violetpipe3_() {
    clearTimeout(timerPreview_violetpipe3_);
    timerPreview_violetpipe3_ = 0;
}

var violetpipe3_State = false;
function StartStopAnimate_violetpipe3_() {
    violetpipe3_State = !violetpipe3_State;
    if(violetpipe3_State){
        ReadOrder_violetpipe3_(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        Preview_violetpipe3_()
    } else{
        ReadOrder_violetpipe3_(60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10, 9, 8, 7, 6, 5, 4, 3, 2, 1);
        Preview_violetpipe3_()
    }
}

/*
 function SetFolderName( strDir )
 {
 strFolder_violetpipe3_ = strDir;
 }*/

function SetFolderName_violetpipe3_(strDir1, strDir2, strDir3) {
    strYMD_violetpipe3_ = strDir1;
    strHour_violetpipe3_ = strDir2;
    strFolder_violetpipe3_ = strDir3;
}

function SetHomeFolder_violetpipe3_(nDir) {
    nHomeFolder_violetpipe3_ = nDir;
}

function GetFolderName_violetpipe3_() {
    return strFolder_violetpipe3_;
}

function InitPreview_violetpipe3_() {
    var i = 0;
    var strHTML_violetpipe3_ = "";
    var dir_name = GetFolderName_violetpipe3_();

    var strWidth = nWidth_violetpipe3_.toString();
    strWidth += "px";
    var strHeight = nHeight_violetpipe3_.toString();
    strHeight += "px";

    var strFolder_violetpipe3_Funny62 = strFolder_violetpipe3_.substring(0, 1);

    $("preview_box_violetpipe3_").style.visibility = "hidden";

    var nPicNum_violetpipe3_ = 0;

    for (i = 0; i < nIDNum_violetpipe3_; i++) {
        var strDivName_violetpipe3_ = "p_violetpipe3_" + i.toString();
        var strImgName_violetpipe3_ = "pic_violetpipe3_" + i.toString();

        var strImg0 = "";

        newimages_violetpipe3_[i] = new Image();

        if (nHomeFolder_violetpipe3_ == 1)
            //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_violetpipe3_ + "/" + strHour_violetpipe3_ + "/" + strFolder_violetpipe3_ + "/" + arrFile_violetpipe3_[i];
            strImg0 = "img/VioletPipe3/" +arrFile_violetpipe3_[i];
        else if (nHomeFolder_violetpipe3_ == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_violetpipe3_ + "/" + strHour_violetpipe3_ + "/" + strFolder_violetpipe3_ + "/" + arrFile_violetpipe3_[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_violetpipe3_Funny62 + "/" + strFolder_violetpipe3_ + "/" + arrFile_violetpipe3_[i];

        if (!bUseWHString_violetpipe3_)
            //strHTML_violetpipe3_ += '<div id="' + strDivName_violetpipe3_ + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_violetpipe3_ + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_violetpipe3_ += '<div id="' + strDivName_violetpipe3_ + '" class="liquid"' + '<img id="' + strImgName_violetpipe3_ + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_violetpipe3_[i];
            var nPicH = arrHString_violetpipe3_[i];


            //nWidth_violetpipe3_, nHeight_violetpipe3_

            if (nPicW == nWidth_violetpipe3_ && nPicH == nHeight_violetpipe3_) {
                strHTML_violetpipe3_ += '<div id="' + strDivName_violetpipe3_ + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_violetpipe3_ + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_violetpipe3_ / nHeight_violetpipe3_;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_violetpipe3_;
                    nNewH = parseInt(nPicH * nWidth_violetpipe3_ / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_violetpipe3_;
                    nNewW = parseInt(nPicW * nHeight_violetpipe3_ / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_violetpipe3_ - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_violetpipe3_ - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_violetpipe3_ += '<div id="' + strDivName_violetpipe3_ + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_violetpipe3_ + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_violetpipe3_ += '<div id="' + strDivName_violetpipe3_ + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_violetpipe3_ + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_violetpipe3_[i].src = strImg0;
        newimages_violetpipe3_[i].onload = function () {

            nPicNum_violetpipe3_++;
            if (nPicNum_violetpipe3_ == nIDNum_violetpipe3_)
                OnLoadAllPics_violetpipe3_();
            else {
                var nPercent = Math.floor(nPicNum_violetpipe3_ / nIDNum_violetpipe3_ * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_violetpipe3_;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_violetpipe3_() {
    for (var i = 0; i < nIDNum_violetpipe3_; i++) {
        var strDivName_violetpipe3_ = "p_violetpipe3_" + i.toString();
        var strImgName_violetpipe3_ = "pic_violetpipe3_" + i.toString();

        $(strImgName_violetpipe3_).src = newimages_violetpipe3_[i].src;
        $(strDivName_violetpipe3_).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_violetpipe3_.toString();
    strHeight += "px";
    $("preview_box_violetpipe3_").style.height = strHeight;

    $("preview_box_violetpipe3_").style.visibility = "visible";
    document.getElementById("p_violetpipe3_0").style.visibility = 'visible';
    if (violetpipe3_State)
        Preview_violetpipe3_();
}

function Preview_violetpipe3_() {
    StopAnimate_violetpipe3_();
    Animate_violetpipe3_();
}

function ResetImgNumber_violetpipe3_(n) {
    arrID_violetpipe3_.length = n;
    nIDNum_violetpipe3_ = n;
}

function DisplayImages_violetpipe3_() {
    InitPreview_violetpipe3_();
}

function ReadFileName_violetpipe3_(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_violetpipe3_ = nNum;
        arrFile_violetpipe3_.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_violetpipe3_[i] = arguments[i];
        }

        ResetImgNumber_violetpipe3_(nNum);
    }
}


function ReadWHString_violetpipe3_(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_violetpipe3_ = true;
        arrWString_violetpipe3_.length = nNum / 2;
        arrHString_violetpipe3_.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_violetpipe3_[i / 2] = arguments[i];
            arrHString_violetpipe3_[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_violetpipe3_(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_violetpipe3_) {
            for (var i = 0; i < nNum; i++)
                arrID_violetpipe3_[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_violetpipe3_; i++)
                arrID_violetpipe3_[i] = i + 1;
        }
    }
}

function ReadWHS_violetpipe3_(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_violetpipe3_ = arguments[0];
        nHeight_violetpipe3_ = arguments[1];
        nSpeed_violetpipe3_ = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
