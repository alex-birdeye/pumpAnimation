/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_resarrows = 0;
var arrID_resarrows = [1, 2];
var arrFile_resarrows = ["1", "2"];
var bUseWHString_resarrows = false;
var arrWString_resarrows = ["1", "2"];
var arrHString_resarrows = ["1", "2"];
var nActiveID_resarrowsIndex_resarrows = 0;
var nActiveID_resarrows = 0;

var timerPreview_resarrows = 0;
var nIndexPreview_resarrows = 0;
var nIndexPreviewLast_resarrows = -1;
var nWidth_resarrows = 0;
var nHeight_resarrows = 0;
var nSpeed_resarrows = 500;
var strYMD_resarrows = "";
var strHour_resarrows = "";
var strFolder_resarrows = "";
var nHomeFolder_resarrows = 1;
var newimages_resarrows = [];

function Animate_resarrows() {
    if (nIDNum_resarrows <= 0)return;

    var strDivName_resarrows = "";
    if (nIndexPreviewLast_resarrows != -1) {
        strDivName_resarrows = "p_resarrows" + nIndexPreviewLast_resarrows.toString();
        document.getElementById(strDivName_resarrows).style.visibility = 'hidden';
    }

    var nIndex = arrID_resarrows[nIndexPreview_resarrows] - 1;
    strDivName_resarrows = "p_resarrows" + nIndex.toString();
    document.getElementById(strDivName_resarrows).style.visibility = 'visible';

    nIndexPreviewLast_resarrows = nIndex;

    nIndexPreview_resarrows++;
    if (nIndexPreview_resarrows >= nIDNum_resarrows) nIndexPreview_resarrows = 0;

    timerPreview_resarrows = setTimeout("Animate_resarrows()", nSpeed_resarrows);
}

function StopAnimate_resarrows() {
    clearTimeout(timerPreview_resarrows);
    timerPreview_resarrows = 0;
}

var resarrowsState = false;
function StartStopAnimate_resarrows() {
    resarrowsState = !resarrowsState;
    if(resarrowsState){
        document.getElementById("preview_box_resarrows").style.display = "block";
        Preview_resarrows()
    } else{
        StopAnimate_resarrows();
        document.getElementById("preview_box_resarrows").style.display = "none";
    }
}

/*
 function SetFolderName( strDir )
 {
 strFolder_resarrows = strDir;
 }*/

function SetFolderName_resarrows(strDir1, strDir2, strDir3) {
    strYMD_resarrows = strDir1;
    strHour_resarrows = strDir2;
    strFolder_resarrows = strDir3;
}

function SetHomeFolder_resarrows(nDir) {
    nHomeFolder_resarrows = nDir;
}

function GetFolderName_resarrows() {
    return strFolder_resarrows;
}

function InitPreview_resarrows() {
    var i = 0;
    var strHTML_resarrows = "";
    var dir_name = GetFolderName_resarrows();

    var strWidth = nWidth_resarrows.toString();
    strWidth += "px";
    var strHeight = nHeight_resarrows.toString();
    strHeight += "px";

    var strFolder_resarrowsFunny62 = strFolder_resarrows.substring(0, 1);

    $("preview_box_resarrows").style.visibility = "hidden";

    var nPicNum_resarrows = 0;

    for (i = 0; i < nIDNum_resarrows; i++) {
        var strDivName_resarrows = "p_resarrows" + i.toString();
        var strImgName_resarrows = "pic_resarrows" + i.toString();

        var strImg0 = "";

        newimages_resarrows[i] = new Image();

        if (nHomeFolder_resarrows == 1)
            //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_resarrows + "/" + strHour_resarrows + "/" + strFolder_resarrows + "/" + arrFile_resarrows[i];
            strImg0 = "img/ResArrows/" +arrFile_resarrows[i];
        else if (nHomeFolder_resarrows == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_resarrows + "/" + strHour_resarrows + "/" + strFolder_resarrows + "/" + arrFile_resarrows[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_resarrowsFunny62 + "/" + strFolder_resarrows + "/" + arrFile_resarrows[i];

        if (!bUseWHString_resarrows)
            //strHTML_resarrows += '<div id="' + strDivName_resarrows + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_resarrows + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_resarrows += '<div id="' + strDivName_resarrows + '" class="liquid"' + '<img id="' + strImgName_resarrows + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_resarrows[i];
            var nPicH = arrHString_resarrows[i];


            //nWidth_resarrows, nHeight_resarrows

            if (nPicW == nWidth_resarrows && nPicH == nHeight_resarrows) {
                strHTML_resarrows += '<div id="' + strDivName_resarrows + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_resarrows + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_resarrows / nHeight_resarrows;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_resarrows;
                    nNewH = parseInt(nPicH * nWidth_resarrows / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_resarrows;
                    nNewW = parseInt(nPicW * nHeight_resarrows / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_resarrows - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_resarrows - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_resarrows += '<div id="' + strDivName_resarrows + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_resarrows + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_resarrows += '<div id="' + strDivName_resarrows + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_resarrows + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_resarrows[i].src = strImg0;
        newimages_resarrows[i].onload = function () {

            nPicNum_resarrows++;
            if (nPicNum_resarrows == nIDNum_resarrows)
                OnLoadAllPics_resarrows();
            else {
                var nPercent = Math.floor(nPicNum_resarrows / nIDNum_resarrows * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_resarrows;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_resarrows() {
    for (var i = 0; i < nIDNum_resarrows; i++) {
        var strDivName_resarrows = "p_resarrows" + i.toString();
        var strImgName_resarrows = "pic_resarrows" + i.toString();

        $(strImgName_resarrows).src = newimages_resarrows[i].src;
        $(strDivName_resarrows).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_resarrows.toString();
    strHeight += "px";
    $("preview_box_resarrows").style.height = strHeight;

    $("preview_box_resarrows").style.visibility = "visible";

    if (resarrowsState)
    Preview_resarrows();
}

function Preview_resarrows() {
    StopAnimate_resarrows();
    Animate_resarrows();
}

function ResetImgNumber_resarrows(n) {
    arrID_resarrows.length = n;
    nIDNum_resarrows = n;
}

function DisplayImages_resarrows() {
    InitPreview_resarrows();

}

function ReadFileName_resarrows(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_resarrows = nNum;
        arrFile_resarrows.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_resarrows[i] = arguments[i];
        }

        ResetImgNumber_resarrows(nNum);
    }
}


function ReadWHString_resarrows(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_resarrows = true;
        arrWString_resarrows.length = nNum / 2;
        arrHString_resarrows.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_resarrows[i / 2] = arguments[i];
            arrHString_resarrows[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_resarrows(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_resarrows) {
            for (var i = 0; i < nNum; i++)
                arrID_resarrows[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_resarrows; i++)
                arrID_resarrows[i] = i + 1;
        }
    }
}

function ReadWHS_resarrows(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_resarrows = arguments[0];
        nHeight_resarrows = arguments[1];
        nSpeed_resarrows = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
