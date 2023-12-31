const moneyFormat = ( quantity ) =>
{
    return quantity?.toLocaleString( 'en-US', {
        style: 'currency',
        currency: 'USD'
    } );
};

export
{
    moneyFormat
};