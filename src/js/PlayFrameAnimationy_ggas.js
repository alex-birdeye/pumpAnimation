/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_ggas = 0;
var arrID_ggas = [1, 2];
var arrFile_ggas = ["1", "2"];
var bUseWHString_ggas = false;
var arrWString_ggas = ["1", "2"];
var arrHString_ggas = ["1", "2"];
var nActiveID_ggasIndex_ggas = 0;
var nActiveID_ggas = 0;

var timerPreview_ggas = 0;
var nIndexPreview_ggas = 0;
var nIndexPreviewLast_ggas = -1;
var nWidth_ggas = 0;
var nHeight_ggas = 0;
var nSpeed_ggas = 500;
var strYMD_ggas = "";
var strHour_ggas = "";
var strFolder_ggas = "";
var nHomeFolder_ggas = 1;
var newimages_ggas = [];

function Animate_ggas() {
    if (nIDNum_ggas <= 0)return;

    var strDivName_ggas = "";
    if (nIndexPreviewLast_ggas != -1) {
        strDivName_ggas = "p_ggas" + nIndexPreviewLast_ggas.toString();
        document.getElementById(strDivName_ggas).style.visibility = 'hidden';
    }

    var nIndex = arrID_ggas[nIndexPreview_ggas] - 1;
    strDivName_ggas = "p_ggas" + nIndex.toString();
    document.getElementById(strDivName_ggas).style.visibility = 'visible';

    nIndexPreviewLast_ggas = nIndex;

    nIndexPreview_ggas++;
    if (nIndexPreview_ggas >= nIDNum_ggas) nIndexPreview_ggas = 0;

    timerPreview_ggas = setTimeout("Animate_ggas()", nSpeed_ggas);
}

function StopAnimate_ggas() {
    clearTimeout(timerPreview_ggas);
    timerPreview_ggas = 0;
}

var ggasState = true;
function StartStopAnimate_ggas() {
    ggasState = !ggasState;
    if(ggasState){
        document.getElementById("preview_box_ggas").style.display = "block";
        Preview_ggas()
    } else{
        StopAnimate_ggas();
        document.getElementById("preview_box_ggas").style.display = "none";
    }
}

/*
 function SetFolderName( strDir )
 {
 strFolder_ggas = strDir;
 }*/

function SetFolderName_ggas(strDir1, strDir2, strDir3) {
    strYMD_ggas = strDir1;
    strHour_ggas = strDir2;
    strFolder_ggas = strDir3;
}

function SetHomeFolder_ggas(nDir) {
    nHomeFolder_ggas = nDir;
}

function GetFolderName_ggas() {
    return strFolder_ggas;
}

function InitPreview_ggas() {
    var i = 0;
    var strHTML_ggas = "";
    var dir_name = GetFolderName_ggas();

    var strWidth = nWidth_ggas.toString();
    strWidth += "px";
    var strHeight = nHeight_ggas.toString();
    strHeight += "px";

    var strFolder_ggasFunny62 = strFolder_ggas.substring(0, 1);

    $("preview_box_ggas").style.visibility = "hidden";

    var nPicNum_ggas = 0;

    for (i = 0; i < nIDNum_ggas; i++) {
        var strDivName_ggas = "p_ggas" + i.toString();
        var strImgName_ggas = "pic_ggas" + i.toString();

        var strImg0 = "";

        newimages_ggas[i] = new Image();

        if (nHomeFolder_ggas == 1)
            //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_ggas + "/" + strHour_ggas + "/" + strFolder_ggas + "/" + arrFile_ggas[i];
            strImg0 = "img/GreenGas/" +arrFile_ggas[i];
        else if (nHomeFolder_ggas == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_ggas + "/" + strHour_ggas + "/" + strFolder_ggas + "/" + arrFile_ggas[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_ggasFunny62 + "/" + strFolder_ggas + "/" + arrFile_ggas[i];

        if (!bUseWHString_ggas)
            //strHTML_ggas += '<div id="' + strDivName_ggas + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_ggas + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_ggas += '<div id="' + strDivName_ggas + '" class="liquid"' + '<img id="' + strImgName_ggas + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_ggas[i];
            var nPicH = arrHString_ggas[i];


            //nWidth_ggas, nHeight_ggas

            if (nPicW == nWidth_ggas && nPicH == nHeight_ggas) {
                strHTML_ggas += '<div id="' + strDivName_ggas + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_ggas + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_ggas / nHeight_ggas;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_ggas;
                    nNewH = parseInt(nPicH * nWidth_ggas / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_ggas;
                    nNewW = parseInt(nPicW * nHeight_ggas / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_ggas - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_ggas - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_ggas += '<div id="' + strDivName_ggas + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_ggas + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_ggas += '<div id="' + strDivName_ggas + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_ggas + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_ggas[i].src = strImg0;
        newimages_ggas[i].onload = function () {

            nPicNum_ggas++;
            if (nPicNum_ggas == nIDNum_ggas)
                OnLoadAllPics_ggas();
            else {
                var nPercent = Math.floor(nPicNum_ggas / nIDNum_ggas * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_ggas;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_ggas() {
    for (var i = 0; i < nIDNum_ggas; i++) {
        var strDivName_ggas = "p_ggas" + i.toString();
        var strImgName_ggas = "pic_ggas" + i.toString();

        $(strImgName_ggas).src = newimages_ggas[i].src;
        $(strDivName_ggas).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_ggas.toString();
    strHeight += "px";
    $("preview_box_ggas").style.height = strHeight;

    $("preview_box_ggas").style.visibility = "visible";

    Preview_ggas();
}

function Preview_ggas() {
    StopAnimate_ggas();
    Animate_ggas();
}

function ResetImgNumber_ggas(n) {
    arrID_ggas.length = n;
    nIDNum_ggas = n;
}

function DisplayImages_ggas() {
    InitPreview_ggas();

}

function ReadFileName_ggas(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_ggas = nNum;
        arrFile_ggas.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_ggas[i] = arguments[i];
        }

        ResetImgNumber_ggas(nNum);
    }
}


function ReadWHString_ggas(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_ggas = true;
        arrWString_ggas.length = nNum / 2;
        arrHString_ggas.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_ggas[i / 2] = arguments[i];
            arrHString_ggas[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_ggas(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_ggas) {
            for (var i = 0; i < nNum; i++)
                arrID_ggas[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_ggas; i++)
                arrID_ggas[i] = i + 1;
        }
    }
}

function ReadWHS_ggas(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_ggas = arguments[0];
        nHeight_ggas = arguments[1];
        nSpeed_ggas = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
