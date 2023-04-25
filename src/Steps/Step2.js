import ReactPDF, {Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';
import React from 'react';

//export default function Step2(){

    const styles = StyleSheet.create({
        // page: {
        //   flexDirection: 'row',
        //   backgroundColor: '#E4E4E4'
        // },
        // section: {
        //   margin: 10,
        //   padding: 10,
        //   flexGrow: 1
        // }
        body: {
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
          },
          title: {
            fontSize: 24,
            textAlign: 'center',
            fontFamily: 'Oswald'
          },
          author: {
            fontSize: 12,
            textAlign: 'center',
            marginBottom: 40,
          },
          subtitle: {
            fontSize: 18,
            margin: 12,
            fontFamily: 'Oswald'
          },
          text: {
            margin: 12,
            fontSize: 12,
            textAlign: 'justify',
            fontFamily: 'Times-Roman',
            fontStyle: 'color:red'
          },
          image: {
            marginVertical: 15,
            marginHorizontal: 100,
          },
          header: {
            fontSize: 12,
            marginBottom: 20,
            textAlign: 'center',
            color: 'grey',
          },
          pageNumber: {
            position: 'absolute',
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: 'center',
            color: 'grey',
          },
      });

    const Step2 = (props) => {
        return (
            <Document>
                <Page style={styles.body}>
                    <Text style={styles.text}>
                        test....pdf
                    </Text>
                    <Text>
                        아무개   
                    </Text>
                    <Text>
                        this is subtitle with name: {props.name}
                    </Text>
                    {/* <View style={styles.section}>
                        <Text>
                                {props.name}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>Address: 47 Rising sun Irvine ca 92620</Text>
                    </View>                     */}
                </Page>
            </Document>

            
        );
    };
  

    //export default ReactPDF.render(<Step2 />);
    export default Step2;

    //return (
        
    //     <Document>
    //     <Page size="A4" style={styles.page}>
    //       <View style={styles.section}>
    //         <Text>Section #1</Text>
    //       </View>
    //       <View style={styles.section}>
    //         <Text>Section #2</Text>
    //       </View>
    //     </Page>
    //   </Document>
    //)
//}