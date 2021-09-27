var jspb = require("google-protobuf");
var goog = jspb;
var global = Function("return this")();

goog.exportSymbol("proto.main.GenericMessage", null, global);
proto.main.GenericMessage = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.GenericMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.GenericMessage.displayName = "proto.main.GenericMessage";
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  proto.main.GenericMessage.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.main.GenericMessage.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.main.GenericMessage} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.main.GenericMessage.toObject = function (includeInstance, msg) {
    let max = msg.array.length;
    let itr = 1;

    // generalise this
    let keys = ["body", "language"];

    var obj = {};
    while (itr <= max) {
      obj[keys[itr - 1]] = jspb.Message.getFieldWithDefault(msg, itr, "");
      itr++;
    }
    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

module.exports = goog.object.extend(exports, proto.main);
