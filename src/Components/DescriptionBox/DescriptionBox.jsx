import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>
            Discover a world of convenience and choice at
             [Your Store Name], where your shopping experience 
             is our top priority. From the latest fashion trends
              and cutting-edge electronics to unique home décor 
              and must-have beauty products, we offer a curated 
              selection to suit every taste and need.
            </p>
            <p>
                Ecommerce, short for electronic commerce, refers to
                the buying and selling of goods and services over the
                internet. It involves online transactions between businesses
                and consumers or between businesses themselves, typically
                through websites or mobile apps. Ecommerce platforms provide
                 a digital marketplace where users can browse products, 
                 place orders, and make payments, often with added features
                  like customer reviews, inventory management, and secure
                   checkout options.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox