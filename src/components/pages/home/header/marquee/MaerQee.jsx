const MarQuee = () => {

    return (
        <>
            <div className="container-fluid border-t border-b border-[#c9c9cd] py-1 px-2 flex items-center bg-[#ebebeb] marquee-wrapper overflow-hidden whitespace-nowrap">
                <marquee behavior="scroll" direction="" scrollamount="3">
                    <p className="m-0 p-0 text-[14px] font-semibold hover:animate-none text-[#4d4d4d]"><span className="inline-block font-bold">NOTE :- </span> 1. User should never press either forward or Back buttons during the transaction. 📌  ટિકિટ બુક કરતા પહેલા એક્વાર BROWSER HISTORY ક્લિયર કરવી અને મોબાઇલ એપ્લીકેશન અપડેટ કરવી. 2.	User should never refresh the page during the transaction. 📌  ટિકિટ બુક કરતી વખતે FORWORD  કે BACK બટનનો ઉપયોગ કરવો નહિ. 3. Please ensure the reliable Internet Connectivity during entire transaction. 📌  ટ્ર્રાંઝેક્શન કરતી વખતે પેજને REFRESH કરવુ નહિ. 4. Ensure whole transaction should be completed within 15 minutes otherwise Seat might have got released. 📌  ટિકિટ બુકિંગ કરતી વખતે ટિકિટના ટ્રાંઝેક્શનની સંપુર્ણ પ્રક્રીયા ૧૫ મિનિટની અંદર પુર્ણ કરી લેવી નહિતર સીટ બુક થશે નહિ. 5.	For any FAILURE Transactions during E & M Booking (Amount debited from the bank account but Ticket no generated), Refund will be processed within 7 to 10 working days. 📌  જો ઓનલાઇન અને મોબાઇલ એપ્લીકેશનથી ટિકિટ બુક કરતી વખતે ટ્રાંઝેક્શન ફેઇલ થાય (પૈસા કપાય જાય અને ટિકિટ બુક ના થાય) તો રીફંડ મુસાફરની બેંક દ્વારા મુસાફરના બેંક ખાતામા જમા કરવામા આવશે.    " હવેથી ગુજરાત એસ.ટીની વોલ્વો સ્લીપર અને એ.સી સ્લીપરમાં દિવ્યાંગ કાર્ડ ધારક મુસાફરો પોતાના ઓળખકાર્ડના આધારે બુકિંગ કરી મુસાફરી કરી શકશે."</p>
                </marquee>
            </div>
        </>
    )
}
export default MarQuee