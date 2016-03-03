/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_violetarrowssmall2_ = 0;
var arrID_violetarrowssmall2_ = [1, 2];
var arrFile_violetarrowssmall2_ = ["1", "2"];
var bUseWHString_violetarrowssmall2_ = false;
var arrWString_violetarrowssmall2_ = ["1", "2"];
var arrHString_violetarrowssmall2_ = ["1", "2"];
var nActiveID_violetarrowssmall2_Index_violetarrowssmall2_ = 0;
var nActiveID_violetarrowssmall2_ = 0;

var timerPreview_violetarrowssmall2_ = 0;
var nIndexPreview_violetarrowssmall2_ = 0;
var nIndexPreviewLast_violetarrowssmall2_ = -1;
var nWidth_violetarrowssmall2_ = 0;
var nHeight_violetarrowssmall2_ = 0;
var nSpeed_violetarrowssmall2_ = 500;
var strYMD_violetarrowssmall2_ = "";
var strHour_violetarrowssmall2_ = "";
var strFolder_violetarrowssmall2_ = "";
var nHomeFolder_violetarrowssmall2_ = 1;
var newimages_violetarrowssmall2_ = [];

function Animate_violetarrowssmall2_() {
    document.getElementById("preview_box_violetarrowssmall2_").style.display = "block";
    if (nIDNum_violetarrowssmall2_ <= 0)return;

    var strDivName_violetarrowssmall2_ = "";
    if (nIndexPreviewLast_violetarrowssmall2_ != -1) {
        strDivName_violetarrowssmall2_ = "p_violetarrowssmall2_" + nIndexPreviewLast_violetarrowssmall2_.toString();
        document.getElementById(strDivName_violetarrowssmall2_).style.visibility = 'hidden';
    }

    var nIndex = arrID_violetarrowssmall2_[nIndexPreview_violetarrowssmall2_] - 1;
    strDivName_violetarrowssmall2_ = "p_violetarrowssmall2_" + nIndex.toString();
    document.getElementById(strDivName_violetarrowssmall2_).style.visibility = 'visible';

    nIndexPreviewLast_violetarrowssmall2_ = nIndex;

    nIndexPreview_violetarrowssmall2_++;
    if (nIndexPreview_violetarrowssmall2_ >= nIDNum_violetarrowssmall2_) {
        nIndexPreview_violetarrowssmall2_ = 0;
        //StopAnimate_violetarrowssmall2_();
    }
    //else {
        timerPreview_violetarrowssmall2_ = setTimeout("Animate_violetarrowssmall2_()", nSpeed_violetarrowssmall2_);
    //}
}

function StopAnimate_violetarrowssmall2_() {
    document.getElementById("preview_box_violetarrowssmall2_").style.display = "none";
    clearTimeout(timerPreview_violetarrowssmall2_);
    timerPreview_violetarrowssmall2_ = 0;
}

var violetarrowssmall2_State = false;
function StartStopAnimate_violetarrowssmall2_() {
    violetarrowssmall2_State = !violetarrowssmall2_State;
    if(violetarrowssmall2_State){
        document.getElementById("preview_box_violetarrowssmall2_").style.display = "block";
        Preview_violetarrowssmall2_()
    } else{
        StopAnimate_violetarrowssmall2_()
        document.getElementById("preview_box_violetarrowssmall2_").style.display = "none";
    }
}

/*
 function SetFolderName( strDir )
 {
 strFolder_violetarrowssmall2_ = strDir;
 }*/

function SetFolderName_violetarrowssmall2_(strDir1, strDir2, strDir3) {
    strYMD_violetarrowssmall2_ = strDir1;
    strHour_violetarrowssmall2_ = strDir2;
    strFolder_violetarrowssmall2_ = strDir3;
}

function SetHomeFolder_violetarrowssmall2_(nDir) {
    nHomeFolder_violetarrowssmall2_ = nDir;
}

function GetFolderName_violetarrowssmall2_() {
    return strFolder_violetarrowssmall2_;
}

function InitPreview_violetarrowssmall2_() {
    var i = 0;
    var strHTML_violetarrowssmall2_ = "";
    var dir_name = GetFolderName_violetarrowssmall2_();

    var strWidth = nWidth_violetarrowssmall2_.toString();
    strWidth += "px";
    var strHeight = nHeight_violetarrowssmall2_.toString();
    strHeight += "px";

    var strFolder_violetarrowssmall2_Funny62 = strFolder_violetarrowssmall2_.substring(0, 1);

    $("preview_box_violetarrowssmall2_").style.visibility = "hidden";

    var nPicNum_violetarrowssmall2_ = 0;

    for (i = 0; i < nIDNum_violetarrowssmall2_; i++) {
        var strDivName_violetarrowssmall2_ = "p_violetarrowssmall2_" + i.toString();
        var strImgName_violetarrowssmall2_ = "pic_violetarrowssmall2_" + i.toString();

        var strImg0 = "";

        newimages_violetarrowssmall2_[i] = new Image();

        if (nHomeFolder_violetarrowssmall2_ == 1)
        //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_violetarrowssmall2_ + "/" + strHour_violetarrowssmall2_ + "/" + strFolder_violetarrowssmall2_ + "/" + arrFile_violetarrowssmall2_[i];
            strImg0 = "img/VioletArrowsSmall/" +arrFile_violetarrowssmall2_[i];
        else if (nHomeFolder_violetarrowssmall2_ == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_violetarrowssmall2_ + "/" + strHour_violetarrowssmall2_ + "/" + strFolder_violetarrowssmall2_ + "/" + arrFile_violetarrowssmall2_[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_violetarrowssmall2_Funny62 + "/" + strFolder_violetarrowssmall2_ + "/" + arrFile_violetarrowssmall2_[i];

        if (!bUseWHString_violetarrowssmall2_)
        //strHTML_violetarrowssmall2_ += '<div id="' + strDivName_violetarrowssmall2_ + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_violetarrowssmall2_ + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_violetarrowssmall2_ += '<div id="' + strDivName_violetarrowssmall2_ + '" class="liquid"' + '<img id="' + strImgName_violetarrowssmall2_ + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_violetarrowssmall2_[i];
            var nPicH = arrHString_violetarrowssmall2_[i];


            //nWidth_violetarrowssmall2_, nHeight_violetarrowssmall2_

            if (nPicW == nWidth_violetarrowssmall2_ && nPicH == nHeight_violetarrowssmall2_) {
                strHTML_violetarrowssmall2_ += '<div id="' + strDivName_violetarrowssmall2_ + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_violetarrowssmall2_ + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_violetarrowssmall2_ / nHeight_violetarrowssmall2_;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_violetarrowssmall2_;
                    nNewH = parseInt(nPicH * nWidth_violetarrowssmall2_ / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_violetarrowssmall2_;
                    nNewW = parseInt(nPicW * nHeight_violetarrowssmall2_ / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_violetarrowssmall2_ - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_violetarrowssmall2_ - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_violetarrowssmall2_ += '<div id="' + strDivName_violetarrowssmall2_ + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_violetarrowssmall2_ + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_violetarrowssmall2_ += '<div id="' + strDivName_violetarrowssmall2_ + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_violetarrowssmall2_ + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_violetarrowssmall2_[i].src = strImg0;
        newimages_violetarrowssmall2_[i].onload = function () {

            nPicNum_violetarrowssmall2_++;
            if (nPicNum_violetarrowssmall2_ == nIDNum_violetarrowssmall2_)
                OnLoadAllPics_violetarrowssmall2_();
            else {
                var nPercent = Math.floor(nPicNum_violetarrowssmall2_ / nIDNum_violetarrowssmall2_ * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_violetarrowssmall2_;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_violetarrowssmall2_() {
    for (var i = 0; i < nIDNum_violetarrowssmall2_; i++) {
        var strDivName_violetarrowssmall2_ = "p_violetarrowssmall2_" + i.toString();
        var strImgName_violetarrowssmall2_ = "pic_violetarrowssmall2_" + i.toString();

        $(strImgName_violetarrowssmall2_).src = newimages_violetarrowssmall2_[i].src;
        $(strDivName_violetarrowssmall2_).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_violetarrowssmall2_.toString();
    strHeight += "px";
    $("preview_box_violetarrowssmall2_").style.height = strHeight;

    //$("preview_box_violetarrowssmall2_").style.visibility = "visible";
    if (violetarrowssmall2_State)
        Preview_violetarrowssmall2_();
}

function Preview_violetarrowssmall2_() {
    StopAnimate_violetarrowssmall2_();
    Animate_violetarrowssmall2_();
}

function ResetImgNumber_violetarrowssmall2_(n) {
    arrID_violetarrowssmall2_.length = n;
    nIDNum_violetarrowssmall2_ = n;
}

function DisplayImages_violetarrowssmall2_() {
    InitPreview_violetarrowssmall2_();
}

function ReadFileName_violetarrowssmall2_(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_violetarrowssmall2_ = nNum;
        arrFile_violetarrowssmall2_.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_violetarrowssmall2_[i] = arguments[i];
        }

        ResetImgNumber_violetarrowssmall2_(nNum);
    }
}


function ReadWHString_violetarrowssmall2_(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_violetarrowssmall2_ = true;
        arrWString_violetarrowssmall2_.length = nNum / 2;
        arrHString_violetarrowssmall2_.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_violetarrowssmall2_[i / 2] = arguments[i];
            arrHString_violetarrowssmall2_[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_violetarrowssmall2_(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_violetarrowssmall2_) {
            for (var i = 0; i < nNum; i++)
                arrID_violetarrowssmall2_[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_violetarrowssmall2_; i++)
                arrID_violetarrowssmall2_[i] = i + 1;
        }
    }
}

function ReadWHS_violetarrowssmall2_(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_violetarrowssmall2_ = arguments[0];
        nHeight_violetarrowssmall2_ = arguments[1];
        nSpeed_violetarrowssmall2_ = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
