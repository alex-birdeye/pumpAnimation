/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_violetarrowssmall3_ = 0;
var arrID_violetarrowssmall3_ = [1, 2];
var arrFile_violetarrowssmall3_ = ["1", "2"];
var bUseWHString_violetarrowssmall3_ = false;
var arrWString_violetarrowssmall3_ = ["1", "2"];
var arrHString_violetarrowssmall3_ = ["1", "2"];
var nActiveID_violetarrowssmall3_Index_violetarrowssmall3_ = 0;
var nActiveID_violetarrowssmall3_ = 0;

var timerPreview_violetarrowssmall3_ = 0;
var nIndexPreview_violetarrowssmall3_ = 0;
var nIndexPreviewLast_violetarrowssmall3_ = -1;
var nWidth_violetarrowssmall3_ = 0;
var nHeight_violetarrowssmall3_ = 0;
var nSpeed_violetarrowssmall3_ = 500;
var strYMD_violetarrowssmall3_ = "";
var strHour_violetarrowssmall3_ = "";
var strFolder_violetarrowssmall3_ = "";
var nHomeFolder_violetarrowssmall3_ = 1;
var newimages_violetarrowssmall3_ = [];

function Animate_violetarrowssmall3_() {
    if (nIDNum_violetarrowssmall3_ <= 0)return;

    var strDivName_violetarrowssmall3_ = "";
    if (nIndexPreviewLast_violetarrowssmall3_ != -1) {
        strDivName_violetarrowssmall3_ = "p_violetarrowssmall3_" + nIndexPreviewLast_violetarrowssmall3_.toString();
        document.getElementById(strDivName_violetarrowssmall3_).style.visibility = 'hidden';
    }

    var nIndex = arrID_violetarrowssmall3_[nIndexPreview_violetarrowssmall3_] - 1;
    strDivName_violetarrowssmall3_ = "p_violetarrowssmall3_" + nIndex.toString();
    document.getElementById(strDivName_violetarrowssmall3_).style.visibility = 'visible';

    nIndexPreviewLast_violetarrowssmall3_ = nIndex;

    nIndexPreview_violetarrowssmall3_++;
    if (nIndexPreview_violetarrowssmall3_ >= nIDNum_violetarrowssmall3_) {
        nIndexPreview_violetarrowssmall3_ = 0;
        //StopAnimate_violetarrowssmall3_();
    }
    //else {
        timerPreview_violetarrowssmall3_ = setTimeout("Animate_violetarrowssmall3_()", nSpeed_violetarrowssmall3_);
    //}
}

function StopAnimate_violetarrowssmall3_() {
    clearTimeout(timerPreview_violetarrowssmall3_);
    timerPreview_violetarrowssmall3_ = 0;
}

var violetarrowssmall3_State = false;
function StartStopAnimate_violetarrowssmall3_() {
    violetarrowssmall3_State = !violetarrowssmall3_State;
    if(violetarrowssmall3_State){
        document.getElementById("preview_box_violetarrowssmall3_").style.display = "block";
        Preview_violetarrowssmall3_()
    } else{
        StopAnimate_violetarrowssmall3_()
        document.getElementById("preview_box_violetarrowssmall3_").style.display = "none";
    }
}

/*
 function SetFolderName( strDir )
 {
 strFolder_violetarrowssmall3_ = strDir;
 }*/

function SetFolderName_violetarrowssmall3_(strDir1, strDir2, strDir3) {
    strYMD_violetarrowssmall3_ = strDir1;
    strHour_violetarrowssmall3_ = strDir2;
    strFolder_violetarrowssmall3_ = strDir3;
}

function SetHomeFolder_violetarrowssmall3_(nDir) {
    nHomeFolder_violetarrowssmall3_ = nDir;
}

function GetFolderName_violetarrowssmall3_() {
    return strFolder_violetarrowssmall3_;
}

function InitPreview_violetarrowssmall3_() {
    var i = 0;
    var strHTML_violetarrowssmall3_ = "";
    var dir_name = GetFolderName_violetarrowssmall3_();

    var strWidth = nWidth_violetarrowssmall3_.toString();
    strWidth += "px";
    var strHeight = nHeight_violetarrowssmall3_.toString();
    strHeight += "px";

    var strFolder_violetarrowssmall3_Funny62 = strFolder_violetarrowssmall3_.substring(0, 1);

    $("preview_box_violetarrowssmall3_").style.visibility = "hidden";

    var nPicNum_violetarrowssmall3_ = 0;

    for (i = 0; i < nIDNum_violetarrowssmall3_; i++) {
        var strDivName_violetarrowssmall3_ = "p_violetarrowssmall3_" + i.toString();
        var strImgName_violetarrowssmall3_ = "pic_violetarrowssmall3_" + i.toString();

        var strImg0 = "";

        newimages_violetarrowssmall3_[i] = new Image();

        if (nHomeFolder_violetarrowssmall3_ == 1)
        //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_violetarrowssmall3_ + "/" + strHour_violetarrowssmall3_ + "/" + strFolder_violetarrowssmall3_ + "/" + arrFile_violetarrowssmall3_[i];
            strImg0 = "img/VioletArrowsSmall/" +arrFile_violetarrowssmall3_[i];
        else if (nHomeFolder_violetarrowssmall3_ == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_violetarrowssmall3_ + "/" + strHour_violetarrowssmall3_ + "/" + strFolder_violetarrowssmall3_ + "/" + arrFile_violetarrowssmall3_[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_violetarrowssmall3_Funny62 + "/" + strFolder_violetarrowssmall3_ + "/" + arrFile_violetarrowssmall3_[i];

        if (!bUseWHString_violetarrowssmall3_)
        //strHTML_violetarrowssmall3_ += '<div id="' + strDivName_violetarrowssmall3_ + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_violetarrowssmall3_ + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_violetarrowssmall3_ += '<div id="' + strDivName_violetarrowssmall3_ + '" class="liquid"' + '<img id="' + strImgName_violetarrowssmall3_ + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_violetarrowssmall3_[i];
            var nPicH = arrHString_violetarrowssmall3_[i];


            //nWidth_violetarrowssmall3_, nHeight_violetarrowssmall3_

            if (nPicW == nWidth_violetarrowssmall3_ && nPicH == nHeight_violetarrowssmall3_) {
                strHTML_violetarrowssmall3_ += '<div id="' + strDivName_violetarrowssmall3_ + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_violetarrowssmall3_ + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_violetarrowssmall3_ / nHeight_violetarrowssmall3_;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_violetarrowssmall3_;
                    nNewH = parseInt(nPicH * nWidth_violetarrowssmall3_ / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_violetarrowssmall3_;
                    nNewW = parseInt(nPicW * nHeight_violetarrowssmall3_ / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_violetarrowssmall3_ - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_violetarrowssmall3_ - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_violetarrowssmall3_ += '<div id="' + strDivName_violetarrowssmall3_ + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_violetarrowssmall3_ + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_violetarrowssmall3_ += '<div id="' + strDivName_violetarrowssmall3_ + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_violetarrowssmall3_ + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_violetarrowssmall3_[i].src = strImg0;
        newimages_violetarrowssmall3_[i].onload = function () {

            nPicNum_violetarrowssmall3_++;
            if (nPicNum_violetarrowssmall3_ == nIDNum_violetarrowssmall3_)
                OnLoadAllPics_violetarrowssmall3_();
            else {
                var nPercent = Math.floor(nPicNum_violetarrowssmall3_ / nIDNum_violetarrowssmall3_ * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_violetarrowssmall3_;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_violetarrowssmall3_() {
    for (var i = 0; i < nIDNum_violetarrowssmall3_; i++) {
        var strDivName_violetarrowssmall3_ = "p_violetarrowssmall3_" + i.toString();
        var strImgName_violetarrowssmall3_ = "pic_violetarrowssmall3_" + i.toString();

        $(strImgName_violetarrowssmall3_).src = newimages_violetarrowssmall3_[i].src;
        $(strDivName_violetarrowssmall3_).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_violetarrowssmall3_.toString();
    strHeight += "px";
    $("preview_box_violetarrowssmall3_").style.height = strHeight;

    //$("preview_box_violetarrowssmall3_").style.visibility = "visible";
    if (violetarrowssmall3_State)
        Preview_violetarrowssmall3_();
}

function Preview_violetarrowssmall3_() {
    StopAnimate_violetarrowssmall3_();
    Animate_violetarrowssmall3_();
}

function ResetImgNumber_violetarrowssmall3_(n) {
    arrID_violetarrowssmall3_.length = n;
    nIDNum_violetarrowssmall3_ = n;
}

function DisplayImages_violetarrowssmall3_() {
    InitPreview_violetarrowssmall3_();
}

function ReadFileName_violetarrowssmall3_(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_violetarrowssmall3_ = nNum;
        arrFile_violetarrowssmall3_.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_violetarrowssmall3_[i] = arguments[i];
        }

        ResetImgNumber_violetarrowssmall3_(nNum);
    }
}


function ReadWHString_violetarrowssmall3_(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_violetarrowssmall3_ = true;
        arrWString_violetarrowssmall3_.length = nNum / 2;
        arrHString_violetarrowssmall3_.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_violetarrowssmall3_[i / 2] = arguments[i];
            arrHString_violetarrowssmall3_[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_violetarrowssmall3_(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_violetarrowssmall3_) {
            for (var i = 0; i < nNum; i++)
                arrID_violetarrowssmall3_[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_violetarrowssmall3_; i++)
                arrID_violetarrowssmall3_[i] = i + 1;
        }
    }
}

function ReadWHS_violetarrowssmall3_(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_violetarrowssmall3_ = arguments[0];
        nHeight_violetarrowssmall3_ = arguments[1];
        nSpeed_violetarrowssmall3_ = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
