/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_oilpipefromadaptertoadapter = 0;
var arrID_oilpipefromadaptertoadapter = [1, 2];
var arrFile_oilpipefromadaptertoadapter = ["1", "2"];
var bUseWHString_oilpipefromadaptertoadapter = false;
var arrWString_oilpipefromadaptertoadapter = ["1", "2"];
var arrHString_oilpipefromadaptertoadapter = ["1", "2"];
var nActiveID_oilpipefromadaptertoadapterIndex_oilpipefromadaptertoadapter = 0;
var nActiveID_oilpipefromadaptertoadapter = 0;

var timerPreview_oilpipefromadaptertoadapter = 0;
var nIndexPreview_oilpipefromadaptertoadapter = 0;
var nIndexPreviewLast_oilpipefromadaptertoadapter = -1;
var nWidth_oilpipefromadaptertoadapter = 0;
var nHeight_oilpipefromadaptertoadapter = 0;
var nSpeed_oilpipefromadaptertoadapter = 500;
var strYMD_oilpipefromadaptertoadapter = "";
var strHour_oilpipefromadaptertoadapter = "";
var strFolder_oilpipefromadaptertoadapter = "";
var nHomeFolder_oilpipefromadaptertoadapter = 1;
var newimages_oilpipefromadaptertoadapter = [];

function Animate_oilpipefromadaptertoadapter() {
    if (nIDNum_oilpipefromadaptertoadapter <= 0)return;

    var strDivName_oilpipefromadaptertoadapter = "";
    if (nIndexPreviewLast_oilpipefromadaptertoadapter != -1) {
        strDivName_oilpipefromadaptertoadapter = "p_oilpipefromadaptertoadapter" + nIndexPreviewLast_oilpipefromadaptertoadapter.toString();
        document.getElementById(strDivName_oilpipefromadaptertoadapter).style.visibility = 'hidden';
    }

    var nIndex = arrID_oilpipefromadaptertoadapter[nIndexPreview_oilpipefromadaptertoadapter] - 1;
    strDivName_oilpipefromadaptertoadapter = "p_oilpipefromadaptertoadapter" + nIndex.toString();
    document.getElementById(strDivName_oilpipefromadaptertoadapter).style.visibility = 'visible';

    nIndexPreviewLast_oilpipefromadaptertoadapter = nIndex;

    nIndexPreview_oilpipefromadaptertoadapter++;
    if (nIndexPreview_oilpipefromadaptertoadapter >= nIDNum_oilpipefromadaptertoadapter) nIndexPreview_oilpipefromadaptertoadapter = 0;

    timerPreview_oilpipefromadaptertoadapter = setTimeout("Animate_oilpipefromadaptertoadapter()", nSpeed_oilpipefromadaptertoadapter);
}

function StopAnimate_oilpipefromadaptertoadapter() {
    clearTimeout(timerPreview_oilpipefromadaptertoadapter);
    timerPreview_oilpipefromadaptertoadapter = 0;
}
/*
 function SetFolderName( strDir )
 {
 strFolder_oilpipefromadaptertoadapter = strDir;
 }*/

function SetFolderName_oilpipefromadaptertoadapter(strDir1, strDir2, strDir3) {
    strYMD_oilpipefromadaptertoadapter = strDir1;
    strHour_oilpipefromadaptertoadapter = strDir2;
    strFolder_oilpipefromadaptertoadapter = strDir3;
}

function SetHomeFolder_oilpipefromadaptertoadapter(nDir) {
    nHomeFolder_oilpipefromadaptertoadapter = nDir;
}

function GetFolderName_oilpipefromadaptertoadapter() {
    return strFolder_oilpipefromadaptertoadapter;
}

function InitPreview_oilpipefromadaptertoadapter() {
    var i = 0;
    var strHTML_oilpipefromadaptertoadapter = "";
    var dir_name = GetFolderName_oilpipefromadaptertoadapter();

    var strWidth = nWidth_oilpipefromadaptertoadapter.toString();
    strWidth += "px";
    var strHeight = nHeight_oilpipefromadaptertoadapter.toString();
    strHeight += "px";

    var strFolder_oilpipefromadaptertoadapterFunny62 = strFolder_oilpipefromadaptertoadapter.substring(0, 1);

    $("preview_box_oilpipefromadaptertoadapter").style.visibility = "hidden";

    var nPicNum_oilpipefromadaptertoadapter = 0;

    for (i = 0; i < nIDNum_oilpipefromadaptertoadapter; i++) {
        var strDivName_oilpipefromadaptertoadapter = "p_oilpipefromadaptertoadapter" + i.toString();
        var strImgName_oilpipefromadaptertoadapter = "pic_oilpipefromadaptertoadapter" + i.toString();

        var strImg0 = "";

        newimages_oilpipefromadaptertoadapter[i] = new Image();

        if (nHomeFolder_oilpipefromadaptertoadapter == 1)
            //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_oilpipefromadaptertoadapter + "/" + strHour_oilpipefromadaptertoadapter + "/" + strFolder_oilpipefromadaptertoadapter + "/" + arrFile_oilpipefromadaptertoadapter[i];
            strImg0 = "img/OilPipeFromAdapterToAdapter/" +arrFile_oilpipefromadaptertoadapter[i];
        else if (nHomeFolder_oilpipefromadaptertoadapter == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_oilpipefromadaptertoadapter + "/" + strHour_oilpipefromadaptertoadapter + "/" + strFolder_oilpipefromadaptertoadapter + "/" + arrFile_oilpipefromadaptertoadapter[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_oilpipefromadaptertoadapterFunny62 + "/" + strFolder_oilpipefromadaptertoadapter + "/" + arrFile_oilpipefromadaptertoadapter[i];

        if (!bUseWHString_oilpipefromadaptertoadapter)
            //strHTML_oilpipefromadaptertoadapter += '<div id="' + strDivName_oilpipefromadaptertoadapter + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_oilpipefromadaptertoadapter + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_oilpipefromadaptertoadapter += '<div id="' + strDivName_oilpipefromadaptertoadapter + '" class="liquid"' + '<img id="' + strImgName_oilpipefromadaptertoadapter + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_oilpipefromadaptertoadapter[i];
            var nPicH = arrHString_oilpipefromadaptertoadapter[i];


            //nWidth_oilpipefromadaptertoadapter, nHeight_oilpipefromadaptertoadapter

            if (nPicW == nWidth_oilpipefromadaptertoadapter && nPicH == nHeight_oilpipefromadaptertoadapter) {
                strHTML_oilpipefromadaptertoadapter += '<div id="' + strDivName_oilpipefromadaptertoadapter + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_oilpipefromadaptertoadapter + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_oilpipefromadaptertoadapter / nHeight_oilpipefromadaptertoadapter;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_oilpipefromadaptertoadapter;
                    nNewH = parseInt(nPicH * nWidth_oilpipefromadaptertoadapter / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_oilpipefromadaptertoadapter;
                    nNewW = parseInt(nPicW * nHeight_oilpipefromadaptertoadapter / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_oilpipefromadaptertoadapter - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_oilpipefromadaptertoadapter - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_oilpipefromadaptertoadapter += '<div id="' + strDivName_oilpipefromadaptertoadapter + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_oilpipefromadaptertoadapter + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_oilpipefromadaptertoadapter += '<div id="' + strDivName_oilpipefromadaptertoadapter + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_oilpipefromadaptertoadapter + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_oilpipefromadaptertoadapter[i].src = strImg0;
        newimages_oilpipefromadaptertoadapter[i].onload = function () {

            nPicNum_oilpipefromadaptertoadapter++;
            if (nPicNum_oilpipefromadaptertoadapter == nIDNum_oilpipefromadaptertoadapter)
                OnLoadAllPics_oilpipefromadaptertoadapter();
            else {
                var nPercent = Math.floor(nPicNum_oilpipefromadaptertoadapter / nIDNum_oilpipefromadaptertoadapter * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_oilpipefromadaptertoadapter;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_oilpipefromadaptertoadapter() {
    for (var i = 0; i < nIDNum_oilpipefromadaptertoadapter; i++) {
        var strDivName_oilpipefromadaptertoadapter = "p_oilpipefromadaptertoadapter" + i.toString();
        var strImgName_oilpipefromadaptertoadapter = "pic_oilpipefromadaptertoadapter" + i.toString();

        $(strImgName_oilpipefromadaptertoadapter).src = newimages_oilpipefromadaptertoadapter[i].src;
        $(strDivName_oilpipefromadaptertoadapter).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_oilpipefromadaptertoadapter.toString();
    strHeight += "px";
    $("preview_box_oilpipefromadaptertoadapter").style.height = strHeight;

    $("preview_box_oilpipefromadaptertoadapter").style.visibility = "visible";

    Preview_oilpipefromadaptertoadapter();
}

function Preview_oilpipefromadaptertoadapter() {
    StopAnimate_oilpipefromadaptertoadapter();
    Animate_oilpipefromadaptertoadapter();
}

function ResetImgNumber_oilpipefromadaptertoadapter(n) {
    arrID_oilpipefromadaptertoadapter.length = n;
    nIDNum_oilpipefromadaptertoadapter = n;
}

function DisplayImages_oilpipefromadaptertoadapter() {
    InitPreview_oilpipefromadaptertoadapter();

}

function ReadFileName_oilpipefromadaptertoadapter(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_oilpipefromadaptertoadapter = nNum;
        arrFile_oilpipefromadaptertoadapter.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_oilpipefromadaptertoadapter[i] = arguments[i];
        }

        ResetImgNumber_oilpipefromadaptertoadapter(nNum);
    }
}


function ReadWHString_oilpipefromadaptertoadapter(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_oilpipefromadaptertoadapter = true;
        arrWString_oilpipefromadaptertoadapter.length = nNum / 2;
        arrHString_oilpipefromadaptertoadapter.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_oilpipefromadaptertoadapter[i / 2] = arguments[i];
            arrHString_oilpipefromadaptertoadapter[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_oilpipefromadaptertoadapter(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_oilpipefromadaptertoadapter) {
            for (var i = 0; i < nNum; i++)
                arrID_oilpipefromadaptertoadapter[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_oilpipefromadaptertoadapter; i++)
                arrID_oilpipefromadaptertoadapter[i] = i + 1;
        }
    }
}

function ReadWHS_oilpipefromadaptertoadapter(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_oilpipefromadaptertoadapter = arguments[0];
        nHeight_oilpipefromadaptertoadapter = arguments[1];
        nSpeed_oilpipefromadaptertoadapter = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
