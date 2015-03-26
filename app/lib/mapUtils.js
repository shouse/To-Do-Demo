/**
 * @class Util.map
 *
 * @author Steven House
 * @email steven.m.house@gmail.com
 *
 * Map utility functions
 */

// Include logging utility
var log = Alloy.Globals.log;
log.warn('[mapUtils] : Opened Library');

var xhr = require('network/httpClient');
var key = "AIzaSyCgBVzz7tXycmVYq4d-X0vax3MkkOSi5cs";
/**
 * Description
 * @method getLocalMechanics
 * @param {} args
 * @return
 */
exports.getLocalMechanics = function(args) {
    var lat = args.lat;
    var lng = args.lng;
    var success = args.success || function(resp) {};
    var error = args.error || function(resp) {};

    var xhrSetup = {};
    xhrSetup.requestType = "GET";
    xhrSetup.parseJSON = true;
    xhrSetup.url =
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
        lat + "," + lng +
        "&radius=2500&types=car_repair&sensor=false&key=" + key;

    xhrSetup.success = success;

    /**
     * Description
     * @method error
     * @param {} err
     * @param {} context
     * @return
     */
    xhrSetup.error = function(err, context) {
        error(err, context);
    };

    xhr.request(xhrSetup);
};

/**
 * @method getGMapsPlace
 * @param args
 */
exports.getGMapsPlace = function(args) {
    //https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJMUTban-AhYARVhdUFD811Vo&key=AIzaSyCgBVzz7tXycmVYq4d-X0vax3MkkOSi5cs
    var placeId = args.placeId || "ChIJMUTban-AhYARVhdUFD811Vo";
    var success = args.success || function(resp) {};
    var error = args.error || function(resp) {};

    var xhrSetup = {};
    xhrSetup.requestType = "GET";
    xhrSetup.parseJSON = true;
    xhrSetup.url =
        "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeId +
        "&key=" + key;

    xhrSetup.success = success;

    /**
     * Description
     * @method error
     * @param {} err
     * @param {} context
     * @return
     */
    xhrSetup.error = function(err, context) {
        error(err, context);
    };

    xhr.request(xhrSetup);
}


/**
 * @method getGMapsPhoto
 * @param {String} photoReference
 */
exports.getGMapsPhoto = function(args) {
    //https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference;=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key;=AddYourOwnKeyHere
    var photoReference = args.photoReference || false;
    var success = args.success || function(resp) {};
    var error = args.error || function(resp) {};

    var xhrSetup = {};
    xhrSetup.requestType = "GET";
    xhrSetup.parseJSON = false;
    xhrSetup.url = "https://maps.googleapis.com/maps/api/place/photo?photoreference=" + photoReference + "&key=" + key;
    xhrSetup.success = success;

    /**
     * Description
     * @method error
     * @param {} err
     * @param {} context
     * @return
     */
    xhrSetup.error = function(err, context) {
        error(err, context);
    };

    xhr.request(xhrSetup);
}

/*
{
   "html_attributions" : [],
   "results" : [
      {
         "geometry" : {
            "location" : {
               "lat" : -33.870199,
               "lng" : 151.192077
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "1480c14750e7281fa1f3f97a6c0f620d9ef4cc84",
         "name" : "Automotive Vehicle Inspections Pty Ltd",
         "reference" : "CpQBiAAAALLkdW2xbnol1IRj9gMrGd9LV_h5r_cQLERT8Ue3p7DJyioUp1AEAnwOK5Wuqqr4h-DWBYDRMoUDVtS8IHwF8ITRCB_gJ8dBAMYJ8BeTYncgubby3sKOFZauts8evQje2CTj1vpeFJqBOQBr0azhD1Ijh8Pt4Je20Tnom3fZwbXUll2Yc0be6eYRGMxbxeGlxRIQTbOkheD5AAXI8t5SZh8doRoUCL4HrI4jrTIAu1nh2DCgPVOCJko",
         "types" : [ "car_repair", "establishment" ],
         "vicinity" : "214/102 Miller Street, Pyrmont"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.868789,
               "lng" : 151.194217
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "95089fec229ebe8eed7f1aa8845a97379bd0dcee",
         "name" : "Tyres Central",
         "opening_hours" : {
            "open_now" : true
         },
         "photos" : [
            {
               "height" : 151,
               "html_attributions" : [],
               "photo_reference" : "CnRnAAAA_lbpdhLhoybL4txlEnw-q3KgyNH-nRMbfp9mgSajfvAL02ZkqNObN8xrNdzARhz7KwYhesAeVigDwMIBZoMbKkDt_0RF9xXjJhaGqc4ZxGFwnqyY8pfPzJMTLtiDpoFIpNou6ImlEPmCapSp8BXI5BIQ-qXQVpF1uuGF6piBptyuDRoUpjUsVrf7hEjMawZg-ZFqNbVMHOc",
               "width" : 269
            }
         ],
         "reference" : "CnRvAAAAC6oaIu8sJS5BN4bry_7n_c9scDmpuROoQe9wJFfy1TjLFTEb4ol9DmxqaHFFgxSVjClCRGarEqQUeJdQanHVPReaiJFfh5CvcKOIUDNC8KZeLSPduUTsHPMN18Cs8zFMU9PviomUlfMzzN8dNdnj0hIQrk_KE5578UaN7sehh1Nk9RoUhdo52FMCb9p_7lTtCCnRBQB7itY",
         "types" : [ "store", "car_repair", "establishment" ],
         "vicinity" : "Pyrmont"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.870545,
               "lng" : 151.194722
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "2f50bbfae132abbb07fa184cb826e1d29555cb53",
         "name" : "Moses & Sons Smash Repairs",
         "reference" : "CoQBfAAAAAQwiJgMtoLGKX-CGZzF0_Be-OJADVyH8LyC07C8auDpAPDVxZYYH0Cqx70cruFU-cTWI9JlFPRYt2ydsmtEDzaUtNeKnHg_3HLrP9doHP2mCvTWYUGRWFFsHS6Osv_i7rXQX_Iqng0YqWpLD6d4ltTChJMZNoNWrIk8cDzlwrVIEhBxzWeiw5Hl_N2RtMCclqUPGhS01VaK5zAT3VUcsCPH6iIAtnfl8Q",
         "types" : [ "car_repair", "establishment" ],
         "vicinity" : "192 Harris St, Pyrmont"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : -33.87059,
               "lng" : 151.192477
            }
         },
         "icon" : "http://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "c23fc6981ac31013d93377a994eec048f6765717",
         "name" : "Auto Inspect",
         "opening_hours" : {
            "open_now" : false
         },
         "reference" : "CnRuAAAAgoMrldqrw66hHDUGZld4nBW5cCbiy3l_9GUq7-xv01BkIIlZJokXMf15ghj1FkA_iXg8khxVXXbQJn_3704d9GS59gF195eMsv23oKzCrTmLBXibHUIaqjbVWliAHhwuibCrSB6b3z9Z6dQoH-eophIQwD3XlE8BPMaJ6yvogqwPZRoUGd-4S3IygVNdgFMC-T9sGWZ0ybs",
         "types" : [ "car_repair", "establishment" ],
         "vicinity" : "5.01/55 Miller Ln, Pyrmont"
      }
   ],
   "status" : "OK"
}
*/
