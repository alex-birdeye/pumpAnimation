/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_smallgreenpipe = 0;
var arrID_smallgreenpipe = [1, 2];
var arrFile_smallgreenpipe = ["1", "2"];
var bUseWHString_smallgreenpipe = false;
var arrWString_smallgreenpipe = ["1", "2"];
var arrHString_smallgreenpipe = ["1", "2"];
var nActiveID_smallgreenpipeIndex_smallgreenpipe = 0;
var nActiveID_smallgreenpipe = 0;

var timerPreview_smallgreenpipe = 0;
var nIndexPreview_smallgreenpipe = 0;
var nIndexPreviewLast_smallgreenpipe = -1;
var nWidth_smallgreenpipe = 0;
var nHeight_smallgreenpipe = 0;
var nSpeed_smallgreenpipe = 500;
var strYMD_smallgreenpipe = "";
var strHour_smallgreenpipe = "";
var strFolder_smallgreenpipe = "";
var nHomeFolder_smallgreenpipe = 1;
var newimages_smallgreenpipe = [];

function Animate_smallgreenpipe() {
    if (nIDNum_smallgreenpipe <= 0)return;

    var strDivName_smallgreenpipe = "";
    if (nIndexPreviewLast_smallgreenpipe != -1) {
        strDivName_smallgreenpipe = "p_smallgreenpipe" + nIndexPreviewLast_smallgreenpipe.toString();
        document.getElementById(strDivName_smallgreenpipe).style.visibility = 'hidden';
    }

    var nIndex = arrID_smallgreenpipe[nIndexPreview_smallgreenpipe] - 1;
    strDivName_smallgreenpipe = "p_smallgreenpipe" + nIndex.toString();
    document.getElementById(strDivName_smallgreenpipe).style.visibility = 'visible';

    nIndexPreviewLast_smallgreenpipe = nIndex;

    nIndexPreview_smallgreenpipe++;
    if (nIndexPreview_smallgreenpipe >= nIDNum_smallgreenpipe) nIndexPreview_smallgreenpipe = 0;

    timerPreview_smallgreenpipe = setTimeout("Animate_smallgreenpipe()", nSpeed_smallgreenpipe);
}

function StopAnimate_smallgreenpipe() {
    clearTimeout(timerPreview_smallgreenpipe);
    timerPreview_smallgreenpipe = 0;
}
/*
 function SetFolderName( strDir )
 {
 strFolder_smallgreenpipe = strDir;
 }*/

function SetFolderName_smallgreenpipe(strDir1, strDir2, strDir3) {
    strYMD_smallgreenpipe = strDir1;
    strHour_smallgreenpipe = strDir2;
    strFolder_smallgreenpipe = strDir3;
}

function SetHomeFolder_smallgreenpipe(nDir) {
    nHomeFolder_smallgreenpipe = nDir;
}

function GetFolderName_smallgreenpipe() {
    return strFolder_smallgreenpipe;
}

function InitPreview_smallgreenpipe() {
    var i = 0;
    var strHTML_smallgreenpipe = "";
    var dir_name = GetFolderName_smallgreenpipe();

    var strWidth = nWidth_smallgreenpipe.toString();
    strWidth += "px";
    var strHeight = nHeight_smallgreenpipe.toString();
    strHeight += "px";

    var strFolder_smallgreenpipeFunny62 = strFolder_smallgreenpipe.substring(0, 1);

    $("preview_box_smallgreenpipe").style.visibility = "hidden";

    var nPicNum_smallgreenpipe = 0;

    for (i = 0; i < nIDNum_smallgreenpipe; i++) {
        var strDivName_smallgreenpipe = "p_smallgreenpipe" + i.toString();
        var strImgName_smallgreenpipe = "pic_smallgreenpipe" + i.toString();

        var strImg0 = "";

        newimages_smallgreenpipe[i] = new Image();

        if (nHomeFolder_smallgreenpipe == 1)
            //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_smallgreenpipe + "/" + strHour_smallgreenpipe + "/" + strFolder_smallgreenpipe + "/" + arrFile_smallgreenpipe[i];
            strImg0 = "img/SmallGreenPipe/" +arrFile_smallgreenpipe[i];
        else if (nHomeFolder_smallgreenpipe == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_smallgreenpipe + "/" + strHour_smallgreenpipe + "/" + strFolder_smallgreenpipe + "/" + arrFile_smallgreenpipe[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_smallgreenpipeFunny62 + "/" + strFolder_smallgreenpipe + "/" + arrFile_smallgreenpipe[i];

        if (!bUseWHString_smallgreenpipe)
            //strHTML_smallgreenpipe += '<div id="' + strDivName_smallgreenpipe + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_smallgreenpipe + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_smallgreenpipe += '<div id="' + strDivName_smallgreenpipe + '" class="liquid"' + '<img id="' + strImgName_smallgreenpipe + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_smallgreenpipe[i];
            var nPicH = arrHString_smallgreenpipe[i];


            //nWidth_smallgreenpipe, nHeight_smallgreenpipe

            if (nPicW == nWidth_smallgreenpipe && nPicH == nHeight_smallgreenpipe) {
                strHTML_smallgreenpipe += '<div id="' + strDivName_smallgreenpipe + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_smallgreenpipe + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_smallgreenpipe / nHeight_smallgreenpipe;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_smallgreenpipe;
                    nNewH = parseInt(nPicH * nWidth_smallgreenpipe / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_smallgreenpipe;
                    nNewW = parseInt(nPicW * nHeight_smallgreenpipe / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_smallgreenpipe - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_smallgreenpipe - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_smallgreenpipe += '<div id="' + strDivName_smallgreenpipe + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_smallgreenpipe + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_smallgreenpipe += '<div id="' + strDivName_smallgreenpipe + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_smallgreenpipe + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_smallgreenpipe[i].src = strImg0;
        newimages_smallgreenpipe[i].onload = function () {

            nPicNum_smallgreenpipe++;
            if (nPicNum_smallgreenpipe == nIDNum_smallgreenpipe)
                OnLoadAllPics_smallgreenpipe();
            else {
                var nPercent = Math.floor(nPicNum_smallgreenpipe / nIDNum_smallgreenpipe * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_smallgreenpipe;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_smallgreenpipe() {
    for (var i = 0; i < nIDNum_smallgreenpipe; i++) {
        var strDivName_smallgreenpipe = "p_smallgreenpipe" + i.toString();
        var strImgName_smallgreenpipe = "pic_smallgreenpipe" + i.toString();

        $(strImgName_smallgreenpipe).src = newimages_smallgreenpipe[i].src;
        $(strDivName_smallgreenpipe).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_smallgreenpipe.toString();
    strHeight += "px";
    $("preview_box_smallgreenpipe").style.height = strHeight;

    $("preview_box_smallgreenpipe").style.visibility = "visible";

    Preview_smallgreenpipe();
}

function Preview_smallgreenpipe() {
    StopAnimate_smallgreenpipe();
    Animate_smallgreenpipe();
}

function ResetImgNumber_smallgreenpipe(n) {
    arrID_smallgreenpipe.length = n;
    nIDNum_smallgreenpipe = n;
}

function DisplayImages_smallgreenpipe() {
    InitPreview_smallgreenpipe();

}

function ReadFileName_smallgreenpipe(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_smallgreenpipe = nNum;
        arrFile_smallgreenpipe.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_smallgreenpipe[i] = arguments[i];
        }

        ResetImgNumber_smallgreenpipe(nNum);
    }
}


function ReadWHString_smallgreenpipe(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_smallgreenpipe = true;
        arrWString_smallgreenpipe.length = nNum / 2;
        arrHString_smallgreenpipe.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_smallgreenpipe[i / 2] = arguments[i];
            arrHString_smallgreenpipe[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_smallgreenpipe(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_smallgreenpipe) {
            for (var i = 0; i < nNum; i++)
                arrID_smallgreenpipe[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_smallgreenpipe; i++)
                arrID_smallgreenpipe[i] = i + 1;
        }
    }
}

function ReadWHS_smallgreenpipe(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_smallgreenpipe = arguments[0];
        nHeight_smallgreenpipe = arguments[1];
        nSpeed_smallgreenpipe = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
