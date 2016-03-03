/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_violetarrowssmall = 0;
var arrID_violetarrowssmall = [1, 2];
var arrFile_violetarrowssmall = ["1", "2"];
var bUseWHString_violetarrowssmall = false;
var arrWString_violetarrowssmall = ["1", "2"];
var arrHString_violetarrowssmall = ["1", "2"];
var nActiveID_violetarrowssmallIndex_violetarrowssmall = 0;
var nActiveID_violetarrowssmall = 0;

var timerPreview_violetarrowssmall = 0;
var nIndexPreview_violetarrowssmall = 0;
var nIndexPreviewLast_violetarrowssmall = -1;
var nWidth_violetarrowssmall = 0;
var nHeight_violetarrowssmall = 0;
var nSpeed_violetarrowssmall = 500;
var strYMD_violetarrowssmall = "";
var strHour_violetarrowssmall = "";
var strFolder_violetarrowssmall = "";
var nHomeFolder_violetarrowssmall = 1;
var newimages_violetarrowssmall = [];

function Animate_violetarrowssmall() {
    document.getElementById("preview_box_violetarrowssmall").style.display = "block";
    if (nIDNum_violetarrowssmall <= 0)return;

    var strDivName_violetarrowssmall = "";
    if (nIndexPreviewLast_violetarrowssmall != -1) {
        strDivName_violetarrowssmall = "p_violetarrowssmall" + nIndexPreviewLast_violetarrowssmall.toString();
        document.getElementById(strDivName_violetarrowssmall).style.visibility = 'hidden';
    }

    var nIndex = arrID_violetarrowssmall[nIndexPreview_violetarrowssmall] - 1;
    strDivName_violetarrowssmall = "p_violetarrowssmall" + nIndex.toString();
    document.getElementById(strDivName_violetarrowssmall).style.visibility = 'visible';

    nIndexPreviewLast_violetarrowssmall = nIndex;

    nIndexPreview_violetarrowssmall++;
    if (nIndexPreview_violetarrowssmall >= nIDNum_violetarrowssmall) {
        nIndexPreview_violetarrowssmall = 0;
        //StopAnimate_violetarrowssmall();
    }
    //else {
        timerPreview_violetarrowssmall = setTimeout("Animate_violetarrowssmall()", nSpeed_violetarrowssmall);
    //}
}

function StopAnimate_violetarrowssmall() {
    document.getElementById("preview_box_violetarrowssmall").style.display = "none";
    clearTimeout(timerPreview_violetarrowssmall);
    timerPreview_violetarrowssmall = 0;
}

var violetarrowssmallState = false;
function StartStopAnimate_violetarrowssmall() {
    violetarrowssmallState = !violetarrowssmallState;
    if(violetarrowssmallState){
        document.getElementById("preview_box_violetarrowssmall").style.display = "block";
        Preview_violetarrowssmall()
    } else{
        StopAnimate_violetarrowssmall()
        document.getElementById("preview_box_violetarrowssmall").style.display = "none";
    }
}

/*
 function SetFolderName( strDir )
 {
 strFolder_violetarrowssmall = strDir;
 }*/

function SetFolderName_violetarrowssmall(strDir1, strDir2, strDir3) {
    strYMD_violetarrowssmall = strDir1;
    strHour_violetarrowssmall = strDir2;
    strFolder_violetarrowssmall = strDir3;
}

function SetHomeFolder_violetarrowssmall(nDir) {
    nHomeFolder_violetarrowssmall = nDir;
}

function GetFolderName_violetarrowssmall() {
    return strFolder_violetarrowssmall;
}

function InitPreview_violetarrowssmall() {
    var i = 0;
    var strHTML_violetarrowssmall = "";
    var dir_name = GetFolderName_violetarrowssmall();

    var strWidth = nWidth_violetarrowssmall.toString();
    strWidth += "px";
    var strHeight = nHeight_violetarrowssmall.toString();
    strHeight += "px";

    var strFolder_violetarrowssmallFunny62 = strFolder_violetarrowssmall.substring(0, 1);

    $("preview_box_violetarrowssmall").style.visibility = "hidden";

    var nPicNum_violetarrowssmall = 0;

    for (i = 0; i < nIDNum_violetarrowssmall; i++) {
        var strDivName_violetarrowssmall = "p_violetarrowssmall" + i.toString();
        var strImgName_violetarrowssmall = "pic_violetarrowssmall" + i.toString();

        var strImg0 = "";

        newimages_violetarrowssmall[i] = new Image();

        if (nHomeFolder_violetarrowssmall == 1)
        //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_violetarrowssmall + "/" + strHour_violetarrowssmall + "/" + strFolder_violetarrowssmall + "/" + arrFile_violetarrowssmall[i];
            strImg0 = "img/VioletArrowsSmall/" +arrFile_violetarrowssmall[i];
        else if (nHomeFolder_violetarrowssmall == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_violetarrowssmall + "/" + strHour_violetarrowssmall + "/" + strFolder_violetarrowssmall + "/" + arrFile_violetarrowssmall[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_violetarrowssmallFunny62 + "/" + strFolder_violetarrowssmall + "/" + arrFile_violetarrowssmall[i];

        if (!bUseWHString_violetarrowssmall)
        //strHTML_violetarrowssmall += '<div id="' + strDivName_violetarrowssmall + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_violetarrowssmall + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_violetarrowssmall += '<div id="' + strDivName_violetarrowssmall + '" class="liquid"' + '<img id="' + strImgName_violetarrowssmall + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_violetarrowssmall[i];
            var nPicH = arrHString_violetarrowssmall[i];


            //nWidth_violetarrowssmall, nHeight_violetarrowssmall

            if (nPicW == nWidth_violetarrowssmall && nPicH == nHeight_violetarrowssmall) {
                strHTML_violetarrowssmall += '<div id="' + strDivName_violetarrowssmall + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_violetarrowssmall + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_violetarrowssmall / nHeight_violetarrowssmall;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_violetarrowssmall;
                    nNewH = parseInt(nPicH * nWidth_violetarrowssmall / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_violetarrowssmall;
                    nNewW = parseInt(nPicW * nHeight_violetarrowssmall / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_violetarrowssmall - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_violetarrowssmall - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_violetarrowssmall += '<div id="' + strDivName_violetarrowssmall + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_violetarrowssmall + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_violetarrowssmall += '<div id="' + strDivName_violetarrowssmall + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_violetarrowssmall + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_violetarrowssmall[i].src = strImg0;
        newimages_violetarrowssmall[i].onload = function () {

            nPicNum_violetarrowssmall++;
            if (nPicNum_violetarrowssmall == nIDNum_violetarrowssmall)
                OnLoadAllPics_violetarrowssmall();
            else {
                var nPercent = Math.floor(nPicNum_violetarrowssmall / nIDNum_violetarrowssmall * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_violetarrowssmall;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_violetarrowssmall() {
    for (var i = 0; i < nIDNum_violetarrowssmall; i++) {
        var strDivName_violetarrowssmall = "p_violetarrowssmall" + i.toString();
        var strImgName_violetarrowssmall = "pic_violetarrowssmall" + i.toString();

        $(strImgName_violetarrowssmall).src = newimages_violetarrowssmall[i].src;
        $(strDivName_violetarrowssmall).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_violetarrowssmall.toString();
    strHeight += "px";
    $("preview_box_violetarrowssmall").style.height = strHeight;

    //$("preview_box_violetarrowssmall").style.visibility = "visible";
    if (violetarrowssmallState)
        Preview_violetarrowssmall();
}

function Preview_violetarrowssmall() {
    StopAnimate_violetarrowssmall();
    Animate_violetarrowssmall();
}

function ResetImgNumber_violetarrowssmall(n) {
    arrID_violetarrowssmall.length = n;
    nIDNum_violetarrowssmall = n;
}

function DisplayImages_violetarrowssmall() {
    InitPreview_violetarrowssmall();
}

function ReadFileName_violetarrowssmall(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_violetarrowssmall = nNum;
        arrFile_violetarrowssmall.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_violetarrowssmall[i] = arguments[i];
        }

        ResetImgNumber_violetarrowssmall(nNum);
    }
}


function ReadWHString_violetarrowssmall(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_violetarrowssmall = true;
        arrWString_violetarrowssmall.length = nNum / 2;
        arrHString_violetarrowssmall.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_violetarrowssmall[i / 2] = arguments[i];
            arrHString_violetarrowssmall[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_violetarrowssmall(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_violetarrowssmall) {
            for (var i = 0; i < nNum; i++)
                arrID_violetarrowssmall[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_violetarrowssmall; i++)
                arrID_violetarrowssmall[i] = i + 1;
        }
    }
}

function ReadWHS_violetarrowssmall(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_violetarrowssmall = arguments[0];
        nHeight_violetarrowssmall = arguments[1];
        nSpeed_violetarrowssmall = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
