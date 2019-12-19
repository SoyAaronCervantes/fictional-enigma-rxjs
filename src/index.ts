import {fromEvent} from "rxjs";
import {map, tap} from "rxjs/operators";

const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium, risus vitae gravida eleifend, eros mi ullamcorper enim, id semper velit est vitae enim. Nulla nec arcu non enim consequat rutrum eu dapibus leo. Sed malesuada odio vel malesuada rhoncus. Donec suscipit lacinia neque id accumsan. Quisque mollis posuere diam, et commodo erat cursus ac. Vestibulum ut leo vitae tellus vulputate pretium et sed diam. Morbi ante purus, malesuada vel accumsan quis, congue ac ex. Ut tortor nibh, hendrerit a nunc id, tincidunt maximus est. Proin vitae urna lacus. Curabitur dignissim faucibus nisl, sed mattis mi auctor eget. Maecenas consequat tortor eu orci gravida maximus. Aliquam sed nulla fermentum, semper dui a, auctor velit.
<br>
<br>
Morbi ultricies sapien erat, et egestas erat elementum at. Maecenas eu lectus ultrices, ultrices diam et, interdum elit. Praesent at molestie augue. Nulla nisl est, viverra quis magna sit amet, scelerisque condimentum felis. Donec sit amet sollicitudin nulla. Etiam tellus tortor, finibus sit amet mauris vel, luctus efficitur massa. Vestibulum aliquam eros in pellentesque sodales. Morbi quis magna rutrum ligula commodo maximus. Mauris venenatis lacus a nulla dapibus, sed commodo odio eleifend. Sed vehicula tempor metus, a luctus urna tempus at. Mauris vehicula nibh ex, non finibus nunc viverra nec.
<br>
<br>
Phasellus et leo eleifend, dictum turpis non, sollicitudin urna. Aliquam aliquet sapien non turpis elementum, vitae fermentum tellus ornare. Sed sed commodo eros, id rhoncus ante. Etiam sit amet mattis odio. Ut eu ante id neque auctor scelerisque. Cras suscipit, libero sed sollicitudin interdum, ante orci elementum sem, ut molestie quam ex eu dui. Aenean semper erat eros, nec dictum neque fermentum egestas. In aliquet augue eget eros tincidunt, a aliquam erat aliquet. Aenean aliquam finibus enim quis lacinia. Curabitur consectetur viverra mollis. Quisque euismod elit id laoreet sagittis.
<br>
<br>
Fusce fermentum lobortis erat, sed mattis est elementum ut. Duis massa eros, ultricies tincidunt neque a, fringilla ornare nunc. Nullam commodo tellus sit amet pulvinar molestie. Etiam est eros, pulvinar hendrerit vestibulum id, tristique ut odio. Suspendisse vitae nisl mauris. Nulla gravida imperdiet nunc. Sed et pretium eros. Aliquam ut sem neque. Mauris ultricies est dolor, quis vehicula augue eleifend nec. Fusce eu mollis turpis, vitae rhoncus ante. Aenean lobortis mi turpis, nec aliquet massa fringilla molestie. Fusce ut vestibulum turpis.
<br>
<br>
Pellentesque vitae lacus justo. Nunc sodales turpis a sodales tincidunt. Phasellus viverra leo nec dolor convallis mattis. Sed efficitur id justo id tristique. Suspendisse in blandit odio. Curabitur suscipit leo leo, sit amet malesuada risus suscipit ut. Sed vel dui rutrum, molestie ante in, condimentum ex. Duis scelerisque arcu vel urna faucibus, ut consequat nisl iaculis. In blandit consequat auctor. Quisque vehicula lobortis mollis. Suspendisse quis justo rhoncus, euismod mi sed, varius nisi. Vestibulum blandit vitae velit non consectetur. Aliquam ultrices, sem non accumsan semper, mi ex rhoncus metus, dapibus porttitor nunc nunc vel nisl. Aliquam pulvinar sem at odio elementum, non tempus dolor volutpat. Nam volutpat sagittis massa, vitae bibendum justo aliquam at.
<br>
<br>
Fusce sagittis nibh porttitor nisl finibus commodo. Cras commodo erat diam, ut gravida dui pharetra in. Praesent nec nulla sed quam tristique pellentesque at ac felis. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer hendrerit tortor nec diam finibus, ut aliquam risus lacinia. Curabitur tempor ipsum ante, ut volutpat neque mollis nec. Aliquam fringilla pretium purus at interdum. Proin dignissim cursus magna, ac vestibulum est pulvinar ut. Mauris quis ullamcorper velit, eget convallis arcu.
<br>
<br>
Curabitur ullamcorper fringilla ante vel ultrices. Pellentesque in enim ut justo tempor placerat ac at enim. Etiam maximus justo vitae urna porta viverra. Aenean condimentum ante a nunc convallis porta. Fusce lacus turpis, tempus vitae nulla id, convallis iaculis urna. Integer volutpat, arcu id placerat suscipit, dui orci dictum massa, quis fermentum dui ante vitae ipsum. Integer risus ipsum, tincidunt ut imperdiet et, molestie eget erat. Curabitur ut purus sem. Sed porta massa in libero hendrerit, in facilisis quam tincidunt. Curabitur id mauris sed lorem facilisis viverra et ut mi. Ut sodales neque non massa posuere hendrerit.
<br>
<br>
Integer commodo vel libero in vulputate. Morbi ac malesuada libero. Fusce pulvinar sem nec ante fringilla lobortis. Morbi semper tincidunt accumsan. Praesent ut massa justo. Nam et quam diam. Fusce ac imperdiet diam. Fusce velit velit, congue eu est vitae, dapibus laoreet nunc.
<br>
<br>
Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris pellentesque enim in turpis vehicula euismod. Nullam posuere, nisi vel malesuada mollis, risus erat semper erat, id malesuada tellus justo ut metus. Sed ultrices enim nisi, in sodales ligula mattis eget. Nullam nisi turpis, mattis at sodales eget, consequat vel purus. Donec blandit aliquet sapien et porta. Pellentesque vestibulum ut lorem quis efficitur. Donec varius aliquet magna nec laoreet. Praesent nec nisl et ante feugiat cursus. Donec nisi mauris, maximus ut rutrum vel, molestie nec sapien. Phasellus dignissim rutrum turpis et pulvinar. Donec ultricies luctus magna semper rhoncus.
<br>
<br>
Proin id nulla euismod ligula gravida euismod sed tempus est. Mauris quis porta mi, rutrum venenatis felis. Maecenas finibus sagittis elit, et placerat urna consequat eu. Cras et augue sit amet orci commodo dignissim. In porta egestas lectus non mattis. Proin sit amet urna quam. Nam id odio et turpis ullamcorper molestie. Nulla sed nulla purus. Nunc in elementum leo.
<br>
<br>
Integer cursus fermentum consectetur. Fusce aliquet semper mi, quis egestas dolor imperdiet sed. Mauris porttitor id dolor vel rutrum. Integer pharetra sagittis justo. Duis at turpis at nulla posuere tincidunt. Pellentesque non leo tellus. Maecenas bibendum sem hendrerit enim convallis consectetur. Phasellus blandit, purus eleifend elementum volutpat, velit ligula hendrerit ipsum, ac volutpat justo orci ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum faucibus leo eget vehicula. Ut finibus est et nisi luctus vulputate. Aenean neque metus, rutrum ut placerat eget, finibus ut libero. Nullam sed mi sit amet nunc pharetra consectetur.
<br>
<br>
Curabitur sed tortor ut diam volutpat iaculis non ut mauris. Nunc et tristique odio, ac maximus leo. Nulla facilisi. Mauris in sagittis leo. In dictum semper libero sed finibus. Nunc congue id tortor vel bibendum. Etiam pellentesque, augue in venenatis dapibus, nunc libero vulputate eros, vel blandit massa augue ut nulla. Morbi pellentesque ligula ut ligula vulputate porta. Quisque bibendum lectus sit amet diam blandit vestibulum vitae nec odio. Nullam eleifend quis diam quis gravida.
<br>
<br>
Duis at tincidunt justo. Aliquam malesuada quis mauris a egestas. Nullam in bibendum sapien, id volutpat elit. Duis a ante sit amet magna laoreet dignissim. Nulla et efficitur dui. Etiam commodo dolor tempor, pulvinar mauris id, rutrum elit. Quisque vel enim vitae dui dapibus posuere nec eget sem. Proin tellus ante, feugiat ac nulla vel, ultrices viverra sem. Praesent blandit ex metus, a scelerisque justo aliquam eget.
<br>
<br>
Integer lacinia id nisi eu iaculis. Donec sapien tortor, rhoncus eget iaculis ullamcorper, mollis et diam. Nulla interdum turpis ut massa euismod accumsan. Aenean efficitur dignissim nunc at viverra. Ut vel est rhoncus, vehicula mauris vel, elementum justo. Maecenas volutpat ex quis sem ultrices, ut condimentum felis mattis. Pellentesque a dignissim erat. Integer varius turpis eget efficitur aliquam. Quisque tristique nulla id nisi vestibulum vestibulum. Curabitur porttitor libero erat, non mattis ex dapibus tempor. Nullam gravida dui sit amet mattis iaculis. Suspendisse et condimentum massa, vel pretium dui. Cras venenatis elit turpis, in suscipit mauris sollicitudin vitae. Suspendisse vulputate, mauris ac mattis dapibus, orci nunc congue nunc, id mattis mi nunc nec purus.
<br>
<br>
Suspendisse iaculis, purus nec hendrerit interdum, lectus metus blandit orci, in ultricies urna urna vitae nisi. Ut posuere sed dui nec tempor. Morbi venenatis justo eget libero dictum, at posuere magna pellentesque. Phasellus rhoncus felis vitae arcu tristique, finibus pellentesque arcu ornare. Nulla facilisi. Sed vitae est nunc. Nullam id urna quis mauris aliquet dictum. Praesent aliquam mauris ut velit mollis, quis blandit sem lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla feugiat porttitor porta. Vestibulum volutpat, leo sed dignissim vulputate, orci nibh commodo felis, ut pulvinar arcu nisi eu augue.
`;

const body = document.querySelector('body');
body.append( text );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append( progressBar );

/**
 * Function to calculate scroll
 */

const calculateScrollPercentage = ( event ) => {

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100;
};

const scroll$ = fromEvent<Event>( document, 'scroll' );

// scroll$.subscribe( console.log );

const progressBar$ = scroll$.pipe(
    map( calculateScrollPercentage ),
    tap( console.log )
);

progressBar$.subscribe( value => {

    progressBar.style.width = `${ value }%`;

});
