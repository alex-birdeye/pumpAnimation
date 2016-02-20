/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_airvalvespringsmall = 0;
var arrID_airvalvespringsmall = [1, 2];
var arrFile_airvalvespringsmall = ["1", "2"];
var bUseWHString_airvalvespringsmall = false;
var arrWString_airvalvespringsmall = ["1", "2"];
var arrHString_airvalvespringsmall = ["1", "2"];
var nActiveID_airvalvespringsmallIndex_airvalvespringsmall = 0;
var nActiveID_airvalvespringsmall = 0;

var timerPreview_airvalvespringsmall = 0;
var nIndexPreview_airvalvespringsmall = 0;
var nIndexPreviewLast_airvalvespringsmall = -1;
var nWidth_airvalvespringsmall = 0;
var nHeight_airvalvespringsmall = 0;
var nSpeed_airvalvespringsmall = 500;
var strYMD_airvalvespringsmall = "";
var strHour_airvalvespringsmall = "";
var strFolder_airvalvespringsmall = "";
var nHomeFolder_airvalvespringsmall = 1;
var newimages_airvalvespringsmall = [];

function Animate_airvalvespringsmall() {
    if (nIDNum_airvalvespringsmall <= 0)return;

    var strDivName_airvalvespringsmall = "";
    if (nIndexPreviewLast_airvalvespringsmall != -1) {
        strDivName_airvalvespringsmall = "p_airvalvespringsmall" + nIndexPreviewLast_airvalvespringsmall.toString();
        document.getElementById(strDivName_airvalvespringsmall).style.visibility = 'hidden';
    }

    var nIndex = arrID_airvalvespringsmall[nIndexPreview_airvalvespringsmall] - 1;
    strDivName_airvalvespringsmall = "p_airvalvespringsmall" + nIndex.toString();
    document.getElementById(strDivName_airvalvespringsmall).style.visibility = 'visible';

    nIndexPreviewLast_airvalvespringsmall = nIndex;

    nIndexPreview_airvalvespringsmall++;
    if (nIndexPreview_airvalvespringsmall >= nIDNum_airvalvespringsmall) nIndexPreview_airvalvespringsmall = 0;

    timerPreview_airvalvespringsmall = setTimeout("Animate_airvalvespringsmall()", nSpeed_airvalvespringsmall);
}

function StopAnimate_airvalvespringsmall() {
    clearTimeout(timerPreview_airvalvespringsmall);
    timerPreview_airvalvespringsmall = 0;
}

var airvalvespringsmallState = true;
function StartStopAnimate_airvalvespringsmall() {
    airvalvespringsmallState = !airvalvespringsmallState;
    if(airvalvespringsmallState){
        Preview_airvalvespringsmall()
    } else{
        StopAnimate_airvalvespringsmall();
    }
}

/*
 function SetFolderName( strDir )
 {
 strFolder_airvalvespringsmall = strDir;
 }*/

function SetFolderName_airvalvespringsmall(strDir1, strDir2, strDir3) {
    strYMD_airvalvespringsmall = strDir1;
    strHour_airvalvespringsmall = strDir2;
    strFolder_airvalvespringsmall = strDir3;
}

function SetHomeFolder_airvalvespringsmall(nDir) {
    nHomeFolder_airvalvespringsmall = nDir;
}

function GetFolderName_airvalvespringsmall() {
    return strFolder_airvalvespringsmall;
}

function InitPreview_airvalvespringsmall() {
    var i = 0;
    var strHTML_airvalvespringsmall = "";
    var dir_name = GetFolderName_airvalvespringsmall();

    var strWidth = nWidth_airvalvespringsmall.toString();
    strWidth += "px";
    var strHeight = nHeight_airvalvespringsmall.toString();
    strHeight += "px";

    var strFolder_airvalvespringsmallFunny62 = strFolder_airvalvespringsmall.substring(0, 1);

    $("preview_box_airvalvespringsmall").style.visibility = "hidden";

    var nPicNum_airvalvespringsmall = 0;

    for (i = 0; i < nIDNum_airvalvespringsmall; i++) {
        var strDivName_airvalvespringsmall = "p_airvalvespringsmall" + i.toString();
        var strImgName_airvalvespringsmall = "pic_airvalvespringsmall" + i.toString();

        var strImg0 = "";

        newimages_airvalvespringsmall[i] = new Image();

        if (nHomeFolder_airvalvespringsmall == 1)
            //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_airvalvespringsmall + "/" + strHour_airvalvespringsmall + "/" + strFolder_airvalvespringsmall + "/" + arrFile_airvalvespringsmall[i];
            strImg0 = "img/AirValveSpringSmall/" +arrFile_airvalvespringsmall[i];
        else if (nHomeFolder_airvalvespringsmall == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_airvalvespringsmall + "/" + strHour_airvalvespringsmall + "/" + strFolder_airvalvespringsmall + "/" + arrFile_airvalvespringsmall[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_airvalvespringsmallFunny62 + "/" + strFolder_airvalvespringsmall + "/" + arrFile_airvalvespringsmall[i];

        if (!bUseWHString_airvalvespringsmall)
            //strHTML_airvalvespringsmall += '<div id="' + strDivName_airvalvespringsmall + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_airvalvespringsmall + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_airvalvespringsmall += '<div id="' + strDivName_airvalvespringsmall + '" class="liquid"' + '<img id="' + strImgName_airvalvespringsmall + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_airvalvespringsmall[i];
            var nPicH = arrHString_airvalvespringsmall[i];


            //nWidth_airvalvespringsmall, nHeight_airvalvespringsmall

            if (nPicW == nWidth_airvalvespringsmall && nPicH == nHeight_airvalvespringsmall) {
                strHTML_airvalvespringsmall += '<div id="' + strDivName_airvalvespringsmall + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_airvalvespringsmall + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_airvalvespringsmall / nHeight_airvalvespringsmall;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_airvalvespringsmall;
                    nNewH = parseInt(nPicH * nWidth_airvalvespringsmall / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_airvalvespringsmall;
                    nNewW = parseInt(nPicW * nHeight_airvalvespringsmall / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_airvalvespringsmall - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_airvalvespringsmall - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_airvalvespringsmall += '<div id="' + strDivName_airvalvespringsmall + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_airvalvespringsmall + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_airvalvespringsmall += '<div id="' + strDivName_airvalvespringsmall + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_airvalvespringsmall + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_airvalvespringsmall[i].src = strImg0;
        newimages_airvalvespringsmall[i].onload = function () {

            nPicNum_airvalvespringsmall++;
            if (nPicNum_airvalvespringsmall == nIDNum_airvalvespringsmall)
                OnLoadAllPics_airvalvespringsmall();
            else {
                var nPercent = Math.floor(nPicNum_airvalvespringsmall / nIDNum_airvalvespringsmall * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_airvalvespringsmall;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_airvalvespringsmall() {
    for (var i = 0; i < nIDNum_airvalvespringsmall; i++) {
        var strDivName_airvalvespringsmall = "p_airvalvespringsmall" + i.toString();
        var strImgName_airvalvespringsmall = "pic_airvalvespringsmall" + i.toString();

        $(strImgName_airvalvespringsmall).src = newimages_airvalvespringsmall[i].src;
        $(strDivName_airvalvespringsmall).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_airvalvespringsmall.toString();
    strHeight += "px";
    $("preview_box_airvalvespringsmall").style.height = strHeight;

    $("preview_box_airvalvespringsmall").style.visibility = "visible";

    Preview_airvalvespringsmall();
}

function Preview_airvalvespringsmall() {
    StopAnimate_airvalvespringsmall();
    Animate_airvalvespringsmall();
}

function ResetImgNumber_airvalvespringsmall(n) {
    arrID_airvalvespringsmall.length = n;
    nIDNum_airvalvespringsmall = n;
}

function DisplayImages_airvalvespringsmall() {
    InitPreview_airvalvespringsmall();

}

function ReadFileName_airvalvespringsmall(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_airvalvespringsmall = nNum;
        arrFile_airvalvespringsmall.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_airvalvespringsmall[i] = arguments[i];
        }

        ResetImgNumber_airvalvespringsmall(nNum);
    }
}


function ReadWHString_airvalvespringsmall(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_airvalvespringsmall = true;
        arrWString_airvalvespringsmall.length = nNum / 2;
        arrHString_airvalvespringsmall.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_airvalvespringsmall[i / 2] = arguments[i];
            arrHString_airvalvespringsmall[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_airvalvespringsmall(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_airvalvespringsmall) {
            for (var i = 0; i < nNum; i++)
                arrID_airvalvespringsmall[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_airvalvespringsmall; i++)
                arrID_airvalvespringsmall[i] = i + 1;
        }
    }
}

function ReadWHS_airvalvespringsmall(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_airvalvespringsmall = arguments[0];
        nHeight_airvalvespringsmall = arguments[1];
        nSpeed_airvalvespringsmall = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
