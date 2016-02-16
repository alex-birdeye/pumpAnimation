/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_water = 0;
var arrID_water = [1, 2];
var arrFile_water = ["1", "2"];
var bUseWHString_water = false;
var arrWString_water = ["1", "2"];
var arrHString_water = ["1", "2"];
var nActiveID_waterIndex_water = 0;
var nActiveID_water = 0;

var timerPreview_water = 0;
var nIndexPreview_water = 0;
var nIndexPreviewLast_water = -1;
var nWidth_water = 0;
var nHeight_water = 0;
var nSpeed_water = 500;
var strYMD_water = "";
var strHour_water = "";
var strFolder_water = "";
var nHomeFolder_water = 1;
var newimages_water = [];

function Animate_water() {
    if (nIDNum_water <= 0)return;

    var strDivName_water = "";
    if (nIndexPreviewLast_water != -1) {
        strDivName_water = "p_water" + nIndexPreviewLast_water.toString();
        document.getElementById(strDivName_water).style.visibility = 'hidden';
    }

    var nIndex = arrID_water[nIndexPreview_water] - 1;
    strDivName_water = "p_water" + nIndex.toString();
    document.getElementById(strDivName_water).style.visibility = 'visible';

    nIndexPreviewLast_water = nIndex;

    nIndexPreview_water++;
    if (nIndexPreview_water >= nIDNum_water) nIndexPreview_water = 0;

    timerPreview_water = setTimeout("Animate_water()", nSpeed_water);
}

function StopAnimate_water() {
    clearTimeout(timerPreview_water);
    timerPreview_water = 0;
}
/*
 function SetFolderName( strDir )
 {
 strFolder_water = strDir;
 }*/

function SetFolderName_water(strDir1, strDir2, strDir3) {
    strYMD_water = strDir1;
    strHour_water = strDir2;
    strFolder_water = strDir3;
}

function SetHomeFolder_water(nDir) {
    nHomeFolder_water = nDir;
}

function GetFolderName_water() {
    return strFolder_water;
}

function InitPreview_water() {
    var i = 0;
    var strHTML_water = "";
    var dir_name = GetFolderName_water();

    var strWidth = nWidth_water.toString();
    strWidth += "px";
    var strHeight = nHeight_water.toString();
    strHeight += "px";

    var strFolder_waterFunny62 = strFolder_water.substring(0, 1);

    $("preview_box_water").style.visibility = "hidden";

    var nPicNum_water = 0;

    for (i = 0; i < nIDNum_water; i++) {
        var strDivName_water = "p_water" + i.toString();
        var strImgName_water = "pic_water" + i.toString();

        var strImg0 = "";

        newimages_water[i] = new Image();

        if (nHomeFolder_water == 1)
            //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_water + "/" + strHour_water + "/" + strFolder_water + "/" + arrFile_water[i];
            strImg0 = "img/Water/" +arrFile_water[i];
        else if (nHomeFolder_water == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_water + "/" + strHour_water + "/" + strFolder_water + "/" + arrFile_water[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_waterFunny62 + "/" + strFolder_water + "/" + arrFile_water[i];

        if (!bUseWHString_water)
            //strHTML_water += '<div id="' + strDivName_water + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_water + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_water += '<div id="' + strDivName_water + '" class="liquid"' + '<img id="' + strImgName_water + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_water[i];
            var nPicH = arrHString_water[i];


            //nWidth_water, nHeight_water

            if (nPicW == nWidth_water && nPicH == nHeight_water) {
                strHTML_water += '<div id="' + strDivName_water + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_water + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_water / nHeight_water;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_water;
                    nNewH = parseInt(nPicH * nWidth_water / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_water;
                    nNewW = parseInt(nPicW * nHeight_water / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_water - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_water - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_water += '<div id="' + strDivName_water + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_water + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_water += '<div id="' + strDivName_water + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_water + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_water[i].src = strImg0;
        newimages_water[i].onload = function () {

            nPicNum_water++;
            if (nPicNum_water == nIDNum_water)
                OnLoadAllPics_water();
            else {
                var nPercent = Math.floor(nPicNum_water / nIDNum_water * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_water;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_water() {
    for (var i = 0; i < nIDNum_water; i++) {
        var strDivName_water = "p_water" + i.toString();
        var strImgName_water = "pic_water" + i.toString();

        $(strImgName_water).src = newimages_water[i].src;
        $(strDivName_water).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_water.toString();
    strHeight += "px";
    $("preview_box_water").style.height = strHeight;

    $("preview_box_water").style.visibility = "visible";

    Preview_water();
}

function Preview_water() {
    StopAnimate_water();
    Animate_water();
}

function ResetImgNumber_water(n) {
    arrID_water.length = n;
    nIDNum_water = n;
}

function DisplayImages_water() {
    InitPreview_water();

}

function ReadFileName_water(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_water = nNum;
        arrFile_water.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_water[i] = arguments[i];
        }

        ResetImgNumber_water(nNum);
    }
}


function ReadWHString_water(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_water = true;
        arrWString_water.length = nNum / 2;
        arrHString_water.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_water[i / 2] = arguments[i];
            arrHString_water[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_water(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_water) {
            for (var i = 0; i < nNum; i++)
                arrID_water[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_water; i++)
                arrID_water[i] = i + 1;
        }
    }
}

function ReadWHS_water(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_water = arguments[0];
        nHeight_water = arguments[1];
        nSpeed_water = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
