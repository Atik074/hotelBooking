const Search = ({fromList}) => {
    return (
        <>
           
        <div className="lg:max-h-[250px] mt-6 grid grid-cols-3 gap-11 bg-white  p-8 rounded-[5px]">

            <div id="searchParams" className={fromList && "!shadow-none"}>
               <span>Destination</span>
               <h2 className="mt-2">
               <select name="destination" id="destination">
                <option value="Bali">Kuakata</option>
                <option value="Bali">Cox&apos;s Bazar</option>
                <option value="Bali">Sylhet</option>
                <option value="Bali">Saint Martin</option>
                <option value="Bali">Sunderban</option>
              </select>
               </h2>
            </div>

            <div>
            <span>Check in</span>
            <h4 className="mt-2">
              <input type="date" name="checkin" id="checkin" />
            </h4>
          </div>

          <div>
            <span>Checkout</span>
            <h4 className="mt-2">
              <input type="date" name="checkout" id="checkout" />
            </h4>
          </div>
            
        </div>


        <button className="search-btn">🔍️ {fromList ? "Modify Search": "Search"}</button>

        </>
    );
};

export default Search;