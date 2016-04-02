import { Mongo } from 'meteor/mongo';
import { Schemas } from 'meteor/aldeed:simple-schema';


seedSymbols = function (){  
   if (SymbolList.find().count() == 0)   {  
     	SymbolList.insert( { "symbol" : "ATVI" ,  "company" : "Activision Blizzard Inc" ,  "price" : "34.42" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "ADBE" ,  "company" : "Adobe Systems Incorporated" ,  "price" : "95.15" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "AKAM" ,  "company" : "Akamai Technologies Inc." ,  "price" : "55.22" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "ALXN" ,  "company" : "Alexion Pharmaceuticals Inc." ,  "price" : "142.94" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "GOOG" ,  "company" : "Alphabet Inc." ,  "price" : "749.91" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "GOOGL" ,  "company" : "Alphabet Inc." ,  "price" : "769.66" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "AMZN" ,  "company" : "Amazon.com Inc." ,  "price" : "598.5" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "AAL" ,  "company" : "American Airlines Group Inc." ,  "price" : "39.52" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "AMGN" ,  "company" : "Amgen Inc." ,  "price" : "154.16" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "ADI" ,  "company" : "Analog Devices Inc." ,  "price" : "58.98" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "AAPL" ,  "company" : "Apple Inc." ,  "price" : "109.99" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "AMAT" ,  "company" : "Applied Materials Inc." ,  "price" : "21.42" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "ADSK" ,  "company" : "Autodesk Inc." ,  "price" : "57.77" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "ADP" ,  "company" : "Automatic Data Processing Inc." ,  "price" : "90.26" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "BIDU" ,  "company" : "Baidu Inc." ,  "price" : "190.32" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "BBBY" ,  "company" : "Bed Bath &amp; Beyond Inc." ,  "price" : "49.51" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "BIIB" ,  "company" : "Biogen Inc." ,  "price" : "260.54" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "BMRN" ,  "company" : "BioMarin Pharmaceutical Inc." ,  "price" : "84.66" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "AVGO" ,  "company" : "Broadcom Limited" ,  "price" : "157.8" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "CA" ,  "company" : "CA Inc." ,  "price" : "30.99" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "CELG" ,  "company" : "Celgene Corporation" ,  "price" : "101.19" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "CERN" ,  "company" : "Cerner Corporation" ,  "price" : "54.08" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "CHTR" ,  "company" : "Charter Communications Inc." ,  "price" : "203.47" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "CHKP" ,  "company" : "Check Point Software Technologies Ltd." ,  "price" : "86.77" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "CSCO" ,  "company" : "Cisco Systems Inc." ,  "price" : "28.68" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "CTXS" ,  "company" : "Citrix Systems Inc." ,  "price" : "79.54" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "CTSH" ,  "company" : "Cognizant Technology Solutions Corporation" ,  "price" : "63.12" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "CMCSA" ,  "company" : "Comcast Corporation" ,  "price" : "61.87" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "COST" ,  "company" : "Costco Wholesale Corporation" ,  "price" : "158.25" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "CSX" ,  "company" : "CSX Corporation" ,  "price" : "25.62" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "CTRP" ,  "company" : "Ctrip.com International Ltd." ,  "price" : "44.84" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "DISCA" ,  "company" : "Discovery Communications Inc." ,  "price" : "28.9" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "DISCK" ,  "company" : "Discovery Communications Inc." ,  "price" : "27.48" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "DISH" ,  "company" : "DISH Network Corporation" ,  "price" : "46.2775" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "DLTR" ,  "company" : "Dollar Tree Inc." ,  "price" : "83.31" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "EBAY" ,  "company" : "eBay Inc." ,  "price" : "23.88" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "EA" ,  "company" : "Electronic Arts Inc." ,  "price" : "65.92" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "ENDP" ,  "company" : "Endo International plc" ,  "price" : "28.68" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "EXPE" ,  "company" : "Expedia Inc." ,  "price" : "108.2" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "ESRX" ,  "company" : "Express Scripts Holding Company" ,  "price" : "69.11" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "FB" ,  "company" : "Facebook Inc." ,  "price" : "116.04" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "FAST" ,  "company" : "Fastenal Company" ,  "price" : "48.93" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "FISV" ,  "company" : "Fiserv Inc." ,  "price" : "103.37" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "GILD" ,  "company" : "Gilead Sciences Inc." ,  "price" : "94.12" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "HSIC" ,  "company" : "Henry Schein Inc." ,  "price" : "172.9" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "ILMN" ,  "company" : "Illumina Inc." ,  "price" : "166.86" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "INCY" ,  "company" : "Incyte Corporation" ,  "price" : "73.3" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "INTC" ,  "company" : "Intel Corporation" ,  "price" : "32.45" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "INTU" ,  "company" : "Intuit Inc." ,  "price" : "104.69" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "ISRG" ,  "company" : "Intuitive Surgical Inc." ,  "price" : "606.5" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "JD" ,  "company" : "JD.com Inc." ,  "price" : "26.76" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "LRCX" ,  "company" : "Lam Research Corporation" ,  "price" : "82.93" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "LBTYA" ,  "company" : "Liberty Global plc" ,  "price" : "38.92" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "LBTYK" ,  "company" : "Liberty Global plc" ,  "price" : "38.08" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "LVNTA" ,  "company" : "Liberty Interactive Corporation" ,  "price" : "39.17" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "QVCA" ,  "company" : "Liberty Interactive Corporation" ,  "price" : "25.58" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "LMCA" ,  "company" : "Liberty Media Corporation" ,  "price" : "38.76" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "LMCK" ,  "company" : "Liberty Media Corporation" ,  "price" : "38.31" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "LLTC" ,  "company" : "Linear Technology Corporation" ,  "price" : "45" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "MAR" ,  "company" : "Marriott International" ,  "price" : "67.13" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "MAT" ,  "company" : "Mattel Inc." ,  "price" : "34.26" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "MXIM" ,  "company" : "Maxim Integrated Products Inc." ,  "price" : "36.61" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "MU" ,  "company" : "Micron Technology Inc." ,  "price" : "11.03" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "MSFT" ,  "company" : "Microsoft Corporation" ,  "price" : "55.555" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "MDLZ" ,  "company" : "Mondelez International Inc." ,  "price" : "41.24" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "MNST" ,  "company" : "Monster Beverage Corporation" ,  "price" : "134.79" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "MYL" ,  "company" : "Mylan N.V." ,  "price" : "47.5" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "NTAP" ,  "company" : "NetApp Inc." ,  "price" : "26.97" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "NTES" ,  "company" : "NetEase Inc." ,  "price" : "143.02" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "NFLX" ,  "company" : "Netflix Inc." ,  "price" : "105.68" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "NCLH" ,  "company" : "Norwegian Cruise Line Holdings Ltd." ,  "price" : "54.52" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "NVDA" ,  "company" : "NVIDIA Corporation" ,  "price" : "36.15" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "NXPI" ,  "company" : "NXP Semiconductors N.V." ,  "price" : "82.05" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "ORLY" ,  "company" : "O'Reilly Automotive Inc." ,  "price" : "277.83" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "PCAR" ,  "company" : "PACCAR Inc." ,  "price" : "54.21" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "PAYX" ,  "company" : "Paychex Inc." ,  "price" : "54.17" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "PYPL" ,  "company" : "PayPal Holdings Inc." ,  "price" : "39.4" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "QCOM" ,  "company" : "QUALCOMM Incorporated" ,  "price" : "50.88" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "REGN" ,  "company" : "Regeneron Pharmaceuticals Inc." ,  "price" : "405.25" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "ROST" ,  "company" : "Ross Stores Inc." ,  "price" : "58.64" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "SBAC" ,  "company" : "SBA Communications Corporation" ,  "price" : "102.04" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "STX" ,  "company" : "Seagate Technology PLC" ,  "price" : "33.69" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "SIRI" ,  "company" : "Sirius XM Holdings Inc." ,  "price" : "3.96" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "SWKS" ,  "company" : "Skyworks Solutions Inc." ,  "price" : "78.18" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "SBUX" ,  "company" : "Starbucks Corporation" ,  "price" : "61.01" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "SRCL" ,  "company" : "Stericycle Inc." ,  "price" : "127.63" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "SYMC" ,  "company" : "Symantec Corporation" ,  "price" : "18.41" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "TMUS" ,  "company" : "T-Mobile US Inc." ,  "price" : "39.36" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "TSLA" ,  "company" : "Tesla Motors Inc." ,  "price" : "237.59" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "TXN" ,  "company" : "Texas Instruments Incorporated" ,  "price" : "57.94" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "KHC" ,  "company" : "The Kraft Heinz Company" ,  "price" : "79.08" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "PCLN" ,  "company" : "The Priceline Group Inc." ,  "price" : "1299.71" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "TSCO" ,  "company" : "Tractor Supply Company" ,  "price" : "91.81" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "TRIP" ,  "company" : "TripAdvisor Inc." ,  "price" : "67.23" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "FOX" ,  "company" : "Twenty-First Century Fox Inc." ,  "price" : "29.12" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "FOXA" ,  "company" : "Twenty-First Century Fox Inc." ,  "price" : "28.58" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "ULTA" ,  "company" : "Ulta Salon Cosmetics &amp; Fragrance Inc." ,  "price" : "194.18" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "VRSK" ,  "company" : "Verisk Analytics Inc." ,  "price" : "80.19" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "VRTX" ,  "company" : "Vertex Pharmaceuticals Incorporated" ,  "price" : "79.15" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "VIAB" ,  "company" : "Viacom Inc." ,  "price" : "41.17" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "VOD" ,  "company" : "Vodafone Group Plc" ,  "price" : "31.73" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "WBA" ,  "company" : "Walgreens Boots Alliance Inc." ,  "price" : "86.7" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "WDC" ,  "company" : "Western Digital Corporation" ,  "price" : "46.6" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "WFM" ,  "company" : "Whole Foods Market Inc." ,  "price" : "30.52" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "XLNX" ,  "company" : "Xilinx Inc." ,  "price" : "47.62" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "YHOO" ,  "company" : "Yahoo! Inc." ,  "price" : "36.48" ,  "delta" : "0.0" });

	}	
}