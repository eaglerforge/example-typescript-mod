/**
 * ===================================
 *         ModAPI Definitions
 * ===================================
 */

/**
 * For more info and documentations, visit:
 * https://eaglerforge.github.io/
 */

interface ModAPI {
    /**
     * A ItemData dictionary of all item types, and block-item types. [Auto]
     */
    items: {};
    /**
     * A BlockData dictionary of all block types. [Auto]
     */
    blocks: {};
    /**
     * A MaterialData dictionary of all the block materials. [Auto]
     */
    materials: {};
    /**
     * An EnchantmentData dictionary of all the in-game enchantments. [Auto]
     */
    enchantments: {};
    /**
     * This is the Minecraft instance exposed to JavaScript. It has no wrapping, and so many properties will be illegible.
     */
    mcinstance: Object;
    /**
     * Returns the version of EaglerForge.
     */
    version: String;
    /**
     * Returns the brand of the Eaglercraft client, taken from ClientBrandRetriever.java.
     */
    clientBrand: String;
    /**
     * uwuifys your string... ( vexdev: whos idea is this??? )
     */
    uwuify: ({string: String});
    /**
     * Triggers a left click ingame.
     */
    clickMouse();
    /**
     * Triggers a right click ingame.
     */
    rightClickMouse();
    /**
     * Returns the current fps.
     */
    getFPS();
    /**
     * Returns screen height.
     */
    getdisplayHeight();
    /**
     * Returns screen width.
     */
    getdisplayWidth();
    /**
     * Draws your string to screen and needs to be ran when the drawhud event is called. the color parameter needs be hex but # is replaced with 0x.
     */
    drawStringWithShadow: ({msg: String, x: Number, y: Number, color: Number});
    /**
     * Same as drawStringWithShadow but doesnt draw the shadow.
     */
    drawString: ({msg: String, x: Number, y: Number, color: Number});
    /**
     * Draws a rect to screen and needs to be ran when the drawhud event is called. the color parameter needs be hex but # is replaced with 0x
     */
    drawRect: ({left: Number, top: Number, right: Number, bottom: Number, color: Number});
    /**
     * This method is used to add event listeners to the event name specified.
     * @param eventName 
     * @param callback 
     */
    addEventListener(eventName: string, callback: Function);
    /**
     * This method is used to remove event listeners to the event name specified.
     * @param eventName 
     * @param callback 
     * @param slow 
     */
    removeEventListener(eventName: string, callback: Function, slow: Boolean);
    /**
     * Allows you to access the Log4J library from Javascript.
     */
    logger: LoggerAPI;
    /**
     * Allows you to shrimply access EagRuntime from Javascript.
     */
    platform: PlatformAPI;
}
interface LoggerAPI {
    loginfo: ({string: String});
    logerror: ({string: String});
    logdebug: ({string: String});
    logwarn: ({string: String});
    logfatal: ({string: String}); //fatalcodes
    logtrace: ({string: String});
}
interface PlatformAPI {
    /**
     * Turns true if the client that loaded the mod is an offline download and turns false if the client is a website (using web folder).
     */
    isOfflineDownload() : Boolean;
    /**
     * Returns free memory.
     */
    freeMemory() : Number;
    /**
     * Returns max memory.
     */
    maxMemory() : Number;
    /**
     * Returns total memory.
     */
    totalMemory() : Number;
    /**
     * you are retarded if you dont understand this.
     */
    openLink: ({url: String});
    /**
     * Gets the user's clipboard.
     */
    getClipboard() : String;
    /**
     * Checks if recording the screen is supported.
     */
    recSupported() : Boolean;
    /**
     * Toggles the screen recorder.
     */
    toggleRec() : void;
    /**
     * Returns the UserAgent.
     */
    getUserAgentString() : void;
    /**
     * Self explanatory.
     */
    getGLRenderer() : void;
    /**
     * Returns the GL version.
     */
    getGLVersion() : void; // returns the GL version
}
export let ModAPI: ModAPI;

// vexdev was here...