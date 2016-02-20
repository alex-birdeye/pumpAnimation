/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_airarrows = 0;
var arrID_airarrows = [1, 2];
var arrFile_airarrows = ["1", "2"];
var bUseWHString_airarrows = false;
var arrWString_airarrows = ["1", "2"];
var arrHString_airarrows = ["1", "2"];
var nActiveID_airarrowsIndex_airarrows = 0;
var nActiveID_airarrows = 0;

var timerPreview_airarrows = 0;
var nIndexPreview_airarrows = 0;
var nIndexPreviewLast_airarrows = -1;
var nWidth_airarrows = 0;
var nHeight_airarrows = 0;
var nSpeed_airarrows = 500;
var strYMD_airarrows = "";
var strHour_airarrows = "";
var strFolder_airarrows = "";
var nHomeFolder_airarrows = 1;
var newimages_airarrows = [];

function Animate_airarrows() {
    if (nIDNum_airarrows <= 0)return;

    var strDivName_airarrows = "";
    if (nIndexPreviewLast_airarrows != -1) {
        strDivName_airarrows = "p_airarrows" + nIndexPreviewLast_airarrows.toString();
        document.getElementById(strDivName_airarrows).style.visibility = 'hidden';
    }

    var nIndex = arrID_airarrows[nIndexPreview_airarrows] - 1;
    strDivName_airarrows = "p_airarrows" + nIndex.toString();
    document.getElementById(strDivName_airarrows).style.visibility = 'visible';

    nIndexPreviewLast_airarrows = nIndex;

    nIndexPreview_airarrows++;
    if (nIndexPreview_airarrows >= nIDNum_airarrows) nIndexPreview_airarrows = 0;

    timerPreview_airarrows = setTimeout("Animate_airarrows()", nSpeed_airarrows);
}

function StopAnimate_airarrows() {
    clearTimeout(timerPreview_airarrows);
    timerPreview_airarrows = 0;
}

var airarrowsState = true;
function StartStopAnimate_airarrows() {
    airarrowsState = !airarrowsState;
    if(airarrowsState){
        document.getElementById("preview_box_airarrows").style.display = "block";
        Preview_airarrows()
    } else{
        StopAnimate_airarrows();
        document.getElementById("preview_box_airarrows").style.display = "none";
    }
}

/*
 function SetFolderName( strDir )
 {
 strFolder_airarrows = strDir;
 }*/

function SetFolderName_airarrows(strDir1, strDir2, strDir3) {
    strYMD_airarrows = strDir1;
    strHour_airarrows = strDir2;
    strFolder_airarrows = strDir3;
}

function SetHomeFolder_airarrows(nDir) {
    nHomeFolder_airarrows = nDir;
}

function GetFolderName_airarrows() {
    return strFolder_airarrows;
}

function InitPreview_airarrows() {
    var i = 0;
    var strHTML_airarrows = "";
    var dir_name = GetFolderName_airarrows();

    var strWidth = nWidth_airarrows.toString();
    strWidth += "px";
    var strHeight = nHeight_airarrows.toString();
    strHeight += "px";

    var strFolder_airarrowsFunny62 = strFolder_airarrows.substring(0, 1);

    $("preview_box_airarrows").style.visibility = "hidden";

    var nPicNum_airarrows = 0;

    for (i = 0; i < nIDNum_airarrows; i++) {
        var strDivName_airarrows = "p_airarrows" + i.toString();
        var strImgName_airarrows = "pic_airarrows" + i.toString();

        var strImg0 = "";

        newimages_airarrows[i] = new Image();

        if (nHomeFolder_airarrows == 1)
            //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_airarrows + "/" + strHour_airarrows + "/" + strFolder_airarrows + "/" + arrFile_airarrows[i];
            strImg0 = "img/AirArrows/" +arrFile_airarrows[i];
        else if (nHomeFolder_airarrows == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_airarrows + "/" + strHour_airarrows + "/" + strFolder_airarrows + "/" + arrFile_airarrows[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_airarrowsFunny62 + "/" + strFolder_airarrows + "/" + arrFile_airarrows[i];

        if (!bUseWHString_airarrows)
            //strHTML_airarrows += '<div id="' + strDivName_airarrows + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_airarrows + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_airarrows += '<div id="' + strDivName_airarrows + '<img id="' + strImgName_airarrows + '" class="preview"' + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_airarrows[i];
            var nPicH = arrHString_airarrows[i];


            //nWidth_airarrows, nHeight_airarrows

            if (nPicW == nWidth_airarrows && nPicH == nHeight_airarrows) {
                strHTML_airarrows += '<div id="' + strDivName_airarrows + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_airarrows + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_airarrows / nHeight_airarrows;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_airarrows;
                    nNewH = parseInt(nPicH * nWidth_airarrows / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_airarrows;
                    nNewW = parseInt(nPicW * nHeight_airarrows / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_airarrows - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_airarrows - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_airarrows += '<div id="' + strDivName_airarrows + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_airarrows + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_airarrows += '<div id="' + strDivName_airarrows + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_airarrows + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_airarrows[i].src = strImg0;
        newimages_airarrows[i].onload = function () {

            nPicNum_airarrows++;
            if (nPicNum_airarrows == nIDNum_airarrows)
                OnLoadAllPics_airarrows();
            else {
                var nPercent = Math.floor(nPicNum_airarrows / nIDNum_airarrows * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_airarrows;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_airarrows() {
    for (var i = 0; i < nIDNum_airarrows; i++) {
        var strDivName_airarrows = "p_airarrows" + i.toString();
        var strImgName_airarrows = "pic_airarrows" + i.toString();

        $(strImgName_airarrows).src = newimages_airarrows[i].src;
        $(strDivName_airarrows).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_airarrows.toString();
    strHeight += "px";
    $("preview_box_airarrows").style.height = strHeight;

    $("preview_box_airarrows").style.visibility = "visible";

    Preview_airarrows();
}

function Preview_airarrows() {
    StopAnimate_airarrows();
    Animate_airarrows();
}

function ResetImgNumber_airarrows(n) {
    arrID_airarrows.length = n;
    nIDNum_airarrows = n;
}

function DisplayImages_airarrows() {
    InitPreview_airarrows();

}

function ReadFileName_airarrows(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_airarrows = nNum;
        arrFile_airarrows.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_airarrows[i] = arguments[i];
        }

        ResetImgNumber_airarrows(nNum);
    }
}


function ReadWHString_airarrows(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_airarrows = true;
        arrWString_airarrows.length = nNum / 2;
        arrHString_airarrows.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_airarrows[i / 2] = arguments[i];
            arrHString_airarrows[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_airarrows(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_airarrows) {
            for (var i = 0; i < nNum; i++)
                arrID_airarrows[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_airarrows; i++)
                arrID_airarrows[i] = i + 1;
        }
    }
}

function ReadWHS_airarrows(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_airarrows = arguments[0];
        nHeight_airarrows = arguments[1];
        nSpeed_airarrows = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
