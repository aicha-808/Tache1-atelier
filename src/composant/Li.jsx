const Li = ({listes}) => {

    return ( <>
            {listes &&
                listes.map((list, index) => <li key={index} >{list.titre}</li>)
            }
        </> 
     );
}
 
export default Li;