/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_oilpipefromsep = 0;
var arrID_oilpipefromsep = [1, 2];
var arrFile_oilpipefromsep = ["1", "2"];
var bUseWHString_oilpipefromsep = false;
var arrWString_oilpipefromsep = ["1", "2"];
var arrHString_oilpipefromsep = ["1", "2"];
var nActiveID_oilpipefromsepIndex_oilpipefromsep = 0;
var nActiveID_oilpipefromsep = 0;

var timerPreview_oilpipefromsep = 0;
var nIndexPreview_oilpipefromsep = 0;
var nIndexPreviewLast_oilpipefromsep = -1;
var nWidth_oilpipefromsep = 0;
var nHeight_oilpipefromsep = 0;
var nSpeed_oilpipefromsep = 500;
var strYMD_oilpipefromsep = "";
var strHour_oilpipefromsep = "";
var strFolder_oilpipefromsep = "";
var nHomeFolder_oilpipefromsep = 1;
var newimages_oilpipefromsep = [];

function Animate_oilpipefromsep() {
    if (nIDNum_oilpipefromsep <= 0)return;

    var strDivName_oilpipefromsep = "";
    if (nIndexPreviewLast_oilpipefromsep != -1) {
        strDivName_oilpipefromsep = "p_oilpipefromsep" + nIndexPreviewLast_oilpipefromsep.toString();
        document.getElementById(strDivName_oilpipefromsep).style.visibility = 'hidden';
    }

    var nIndex = arrID_oilpipefromsep[nIndexPreview_oilpipefromsep] - 1;
    strDivName_oilpipefromsep = "p_oilpipefromsep" + nIndex.toString();
    document.getElementById(strDivName_oilpipefromsep).style.visibility = 'visible';

    nIndexPreviewLast_oilpipefromsep = nIndex;

    nIndexPreview_oilpipefromsep++;
    if (nIndexPreview_oilpipefromsep >= nIDNum_oilpipefromsep) nIndexPreview_oilpipefromsep = 0;

    timerPreview_oilpipefromsep = setTimeout("Animate_oilpipefromsep()", nSpeed_oilpipefromsep);
}

function StopAnimate_oilpipefromsep() {
    clearTimeout(timerPreview_oilpipefromsep);
    timerPreview_oilpipefromsep = 0;
}

var oilpipefromsepState = false;
function startOilPipeFromSep(){
        Preview_oilpipefromsep()
}
function stopOilPipeFromSep(){
        StopAnimate_oilpipefromsep();
}
//function StartStopAnimate_oilpipefromsep() {
//    oilpipefromsepState = !oilpipefromsepState;
//    if(oilpipefromsepState){
//    } else{
//    }
//}

/*
 function SetFolderName( strDir )
 {
 strFolder_oilpipefromsep = strDir;
 }*/

function SetFolderName_oilpipefromsep(strDir1, strDir2, strDir3) {
    strYMD_oilpipefromsep = strDir1;
    strHour_oilpipefromsep = strDir2;
    strFolder_oilpipefromsep = strDir3;
}

function SetHomeFolder_oilpipefromsep(nDir) {
    nHomeFolder_oilpipefromsep = nDir;
}

function GetFolderName_oilpipefromsep() {
    return strFolder_oilpipefromsep;
}

function InitPreview_oilpipefromsep() {
    var i = 0;
    var strHTML_oilpipefromsep = "";
    var dir_name = GetFolderName_oilpipefromsep();

    var strWidth = nWidth_oilpipefromsep.toString();
    strWidth += "px";
    var strHeight = nHeight_oilpipefromsep.toString();
    strHeight += "px";

    var strFolder_oilpipefromsepFunny62 = strFolder_oilpipefromsep.substring(0, 1);

    $("preview_box_oilpipefromsep").style.visibility = "hidden";

    var nPicNum_oilpipefromsep = 0;

    for (i = 0; i < nIDNum_oilpipefromsep; i++) {
        var strDivName_oilpipefromsep = "p_oilpipefromsep" + i.toString();
        var strImgName_oilpipefromsep = "pic_oilpipefromsep" + i.toString();

        var strImg0 = "";

        newimages_oilpipefromsep[i] = new Image();

        if (nHomeFolder_oilpipefromsep == 1)
            //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_oilpipefromsep + "/" + strHour_oilpipefromsep + "/" + strFolder_oilpipefromsep + "/" + arrFile_oilpipefromsep[i];
            strImg0 = "img/OilPipeFromSep/" +arrFile_oilpipefromsep[i];
        else if (nHomeFolder_oilpipefromsep == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_oilpipefromsep + "/" + strHour_oilpipefromsep + "/" + strFolder_oilpipefromsep + "/" + arrFile_oilpipefromsep[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_oilpipefromsepFunny62 + "/" + strFolder_oilpipefromsep + "/" + arrFile_oilpipefromsep[i];

        if (!bUseWHString_oilpipefromsep)
            //strHTML_oilpipefromsep += '<div id="' + strDivName_oilpipefromsep + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_oilpipefromsep + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_oilpipefromsep += '<div id="' + strDivName_oilpipefromsep + '" class="liquid"' + '<img id="' + strImgName_oilpipefromsep + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_oilpipefromsep[i];
            var nPicH = arrHString_oilpipefromsep[i];


            //nWidth_oilpipefromsep, nHeight_oilpipefromsep

            if (nPicW == nWidth_oilpipefromsep && nPicH == nHeight_oilpipefromsep) {
                strHTML_oilpipefromsep += '<div id="' + strDivName_oilpipefromsep + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_oilpipefromsep + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_oilpipefromsep / nHeight_oilpipefromsep;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_oilpipefromsep;
                    nNewH = parseInt(nPicH * nWidth_oilpipefromsep / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_oilpipefromsep;
                    nNewW = parseInt(nPicW * nHeight_oilpipefromsep / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_oilpipefromsep - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_oilpipefromsep - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_oilpipefromsep += '<div id="' + strDivName_oilpipefromsep + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_oilpipefromsep + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_oilpipefromsep += '<div id="' + strDivName_oilpipefromsep + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_oilpipefromsep + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_oilpipefromsep[i].src = strImg0;
        newimages_oilpipefromsep[i].onload = function () {

            nPicNum_oilpipefromsep++;
            if (nPicNum_oilpipefromsep == nIDNum_oilpipefromsep)
                OnLoadAllPics_oilpipefromsep();
            else {
                var nPercent = Math.floor(nPicNum_oilpipefromsep / nIDNum_oilpipefromsep * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_oilpipefromsep;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_oilpipefromsep() {
    for (var i = 0; i < nIDNum_oilpipefromsep; i++) {
        var strDivName_oilpipefromsep = "p_oilpipefromsep" + i.toString();
        var strImgName_oilpipefromsep = "pic_oilpipefromsep" + i.toString();

        $(strImgName_oilpipefromsep).src = newimages_oilpipefromsep[i].src;
        $(strDivName_oilpipefromsep).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_oilpipefromsep.toString();
    strHeight += "px";
    $("preview_box_oilpipefromsep").style.height = strHeight;

    $("preview_box_oilpipefromsep").style.visibility = "visible";

    document.getElementById("p_oilpipefromsep0").style.visibility = 'visible';
    if (oilpipefromsepState)
    Preview_oilpipefromsep();
}

function Preview_oilpipefromsep() {
    StopAnimate_oilpipefromsep();
    Animate_oilpipefromsep();
}

function ResetImgNumber_oilpipefromsep(n) {
    arrID_oilpipefromsep.length = n;
    nIDNum_oilpipefromsep = n;
}

function DisplayImages_oilpipefromsep() {
    InitPreview_oilpipefromsep();

}

function ReadFileName_oilpipefromsep(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_oilpipefromsep = nNum;
        arrFile_oilpipefromsep.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_oilpipefromsep[i] = arguments[i];
        }

        ResetImgNumber_oilpipefromsep(nNum);
    }
}


function ReadWHString_oilpipefromsep(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_oilpipefromsep = true;
        arrWString_oilpipefromsep.length = nNum / 2;
        arrHString_oilpipefromsep.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_oilpipefromsep[i / 2] = arguments[i];
            arrHString_oilpipefromsep[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_oilpipefromsep(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_oilpipefromsep) {
            for (var i = 0; i < nNum; i++)
                arrID_oilpipefromsep[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_oilpipefromsep; i++)
                arrID_oilpipefromsep[i] = i + 1;
        }
    }
}

function ReadWHS_oilpipefromsep(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_oilpipefromsep = arguments[0];
        nHeight_oilpipefromsep = arguments[1];
        nSpeed_oilpipefromsep = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
