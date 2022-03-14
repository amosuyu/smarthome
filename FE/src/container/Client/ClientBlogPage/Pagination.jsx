import { data } from "autoprefixer";
import PropTypes from "prop-types";
import { useState } from "react";

const Pagination = (props) => {
    Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
    };

    Pagination.defaultProps = {
        onPageChange: null,
    };
    const [check, setCheck] = useState(1)
    const data =[]
    
    const {pagination, onPageChange} = props;
    const {page, limit, totalRows} = pagination;
    const totalPage = Math.ceil(totalRows / limit);
    const handleChange = () => {
        for(let i=1;i<=totalPage;i++){
            data.push(i)
        }
    }
    handleChange()
    const handlePageChange = (newpage) => {
        if(onPageChange) {
            onPageChange(newpage);
            window.scrollTo({top: 0, behavior: 'smooth'});
            setCheck(newpage);
        }
    }
    return ( 
        <>
        <div className="w-full flex flex-row gap-[5px] items-center justify-center mb-[150px]">
            {data.map((pageNum) => {
                return (
                    <button
                        key={pageNum}
                        style={ check==pageNum ? {backgroundColor: 'gray'} : {backgroundColor: '#ee1111'}}
                        className="w-[35px] h-[35px] rounded-[50%] text-[#fff] text-[18px] cursor-pointer md:hover:translate-y-[3px] md:hover:scale-90 transition-all disabled:cursor-not-allowed"
                        disabled={page === pageNum}
                        onClick={() => handlePageChange(pageNum)}
                    >
                        {pageNum}
                    </button>  
            )})}
                    
        </div>
        </>
     );
}
 
export default Pagination;