/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_sepspring = 0;
var arrID_sepspring = [1, 2];
var arrFile_sepspring = ["1", "2"];
var bUseWHString_sepspring = false;
var arrWString_sepspring = ["1", "2"];
var arrHString_sepspring = ["1", "2"];
var nActiveID_sepspringIndex_sepspring = 0;
var nActiveID_sepspring = 0;

var timerPreview_sepspring = 0;
var nIndexPreview_sepspring = 0;
var nIndexPreviewLast_sepspring = -1;
var nWidth_sepspring = 0;
var nHeight_sepspring = 0;
var nSpeed_sepspring = 500;
var strYMD_sepspring = "";
var strHour_sepspring = "";
var strFolder_sepspring = "";
var nHomeFolder_sepspring = 1;
var newimages_sepspring = [];

function Animate_sepspring() {
    if (nIDNum_sepspring <= 0)return;

    var strDivName_sepspring = "";
    if (nIndexPreviewLast_sepspring != -1) {
        strDivName_sepspring = "p_sepspring" + nIndexPreviewLast_sepspring.toString();
        document.getElementById(strDivName_sepspring).style.visibility = 'hidden';
    }

    var nIndex = arrID_sepspring[nIndexPreview_sepspring] - 1;
    strDivName_sepspring = "p_sepspring" + nIndex.toString();
    document.getElementById(strDivName_sepspring).style.visibility = 'visible';

    nIndexPreviewLast_sepspring = nIndex;

    nIndexPreview_sepspring++;
    if (nIndexPreview_sepspring >= nIDNum_sepspring) nIndexPreview_sepspring = 0;

    timerPreview_sepspring = setTimeout("Animate_sepspring()", nSpeed_sepspring);
}

function StopAnimate_sepspring() {
    clearTimeout(timerPreview_sepspring);
    timerPreview_sepspring = 0;
}
/*
 function SetFolderName( strDir )
 {
 strFolder_sepspring = strDir;
 }*/

function SetFolderName_sepspring(strDir1, strDir2, strDir3) {
    strYMD_sepspring = strDir1;
    strHour_sepspring = strDir2;
    strFolder_sepspring = strDir3;
}

function SetHomeFolder_sepspring(nDir) {
    nHomeFolder_sepspring = nDir;
}

function GetFolderName_sepspring() {
    return strFolder_sepspring;
}

function InitPreview_sepspring() {
    var i = 0;
    var strHTML_sepspring = "";
    var dir_name = GetFolderName_sepspring();

    var strWidth = nWidth_sepspring.toString();
    strWidth += "px";
    var strHeight = nHeight_sepspring.toString();
    strHeight += "px";

    var strFolder_sepspringFunny62 = strFolder_sepspring.substring(0, 1);

    $("preview_box_sepspring").style.visibility = "hidden";

    var nPicNum_sepspring = 0;

    for (i = 0; i < nIDNum_sepspring; i++) {
        var strDivName_sepspring = "p_sepspring" + i.toString();
        var strImgName_sepspring = "pic_sepspring" + i.toString();

        var strImg0 = "";

        newimages_sepspring[i] = new Image();

        if (nHomeFolder_sepspring == 1)
            //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_sepspring + "/" + strHour_sepspring + "/" + strFolder_sepspring + "/" + arrFile_sepspring[i];
            strImg0 = "img/SepSpring/" +arrFile_sepspring[i];
        else if (nHomeFolder_sepspring == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_sepspring + "/" + strHour_sepspring + "/" + strFolder_sepspring + "/" + arrFile_sepspring[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_sepspringFunny62 + "/" + strFolder_sepspring + "/" + arrFile_sepspring[i];

        if (!bUseWHString_sepspring)
            //strHTML_sepspring += '<div id="' + strDivName_sepspring + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_sepspring + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_sepspring += '<div id="' + strDivName_sepspring + '" class="liquid"' + '<img id="' + strImgName_sepspring + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_sepspring[i];
            var nPicH = arrHString_sepspring[i];


            //nWidth_sepspring, nHeight_sepspring

            if (nPicW == nWidth_sepspring && nPicH == nHeight_sepspring) {
                strHTML_sepspring += '<div id="' + strDivName_sepspring + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_sepspring + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_sepspring / nHeight_sepspring;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_sepspring;
                    nNewH = parseInt(nPicH * nWidth_sepspring / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_sepspring;
                    nNewW = parseInt(nPicW * nHeight_sepspring / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_sepspring - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_sepspring - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_sepspring += '<div id="' + strDivName_sepspring + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_sepspring + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_sepspring += '<div id="' + strDivName_sepspring + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_sepspring + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_sepspring[i].src = strImg0;
        newimages_sepspring[i].onload = function () {

            nPicNum_sepspring++;
            if (nPicNum_sepspring == nIDNum_sepspring)
                OnLoadAllPics_sepspring();
            else {
                var nPercent = Math.floor(nPicNum_sepspring / nIDNum_sepspring * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_sepspring;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_sepspring() {
    for (var i = 0; i < nIDNum_sepspring; i++) {
        var strDivName_sepspring = "p_sepspring" + i.toString();
        var strImgName_sepspring = "pic_sepspring" + i.toString();

        $(strImgName_sepspring).src = newimages_sepspring[i].src;
        $(strDivName_sepspring).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_sepspring.toString();
    strHeight += "px";
    $("preview_box_sepspring").style.height = strHeight;

    $("preview_box_sepspring").style.visibility = "visible";

    Preview_sepspring();
}

function Preview_sepspring() {
    StopAnimate_sepspring();
    Animate_sepspring();
}

function ResetImgNumber_sepspring(n) {
    arrID_sepspring.length = n;
    nIDNum_sepspring = n;
}

function DisplayImages_sepspring() {
    InitPreview_sepspring();

}

function ReadFileName_sepspring(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_sepspring = nNum;
        arrFile_sepspring.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_sepspring[i] = arguments[i];
        }

        ResetImgNumber_sepspring(nNum);
    }
}


function ReadWHString_sepspring(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_sepspring = true;
        arrWString_sepspring.length = nNum / 2;
        arrHString_sepspring.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_sepspring[i / 2] = arguments[i];
            arrHString_sepspring[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_sepspring(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_sepspring) {
            for (var i = 0; i < nNum; i++)
                arrID_sepspring[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_sepspring; i++)
                arrID_sepspring[i] = i + 1;
        }
    }
}

function ReadWHS_sepspring(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_sepspring = arguments[0];
        nHeight_sepspring = arguments[1];
        nSpeed_sepspring = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
