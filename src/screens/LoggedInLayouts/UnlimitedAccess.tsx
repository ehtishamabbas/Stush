import React from 'react';
import { View, Text, ScrollView, Image, FlatList } from 'react-native';
import Screen from '../../components/common/Screen';
import Heading from '../../components/ResueableComponents/Heading';
import GlobalStyles from '../../css/GlobalStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import NavigateButton from '../../components/common/NavigateButton';
interface UnlimitedAccessProps {
    navigation: any;
}

const UnlimitedAccess: React.FC<UnlimitedAccessProps> = ({ navigation }) => {
   
    const listItems = [
        'No Delays – :  Instant access to your funds.',
        'Helping Kids: – Every subscription makes a difference.',
    ];
    const handleNext = () => {
        navigation.navigate('ReceiveFundScreen');
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <Screen navigation={navigation} onBackPress={handleBack}>
            <ScrollView>
                <View style={GlobalStyles.contentContainer}>
                    <Heading
                        secondaryText={"GET PAID ANYTIME - \nUNLIMITED ACCESS"}
                        type="secondary"
                    />

                    <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={GlobalStyles.dollersign}>

                            <Text style={{ fontWeight: 'bold', fontSize: (28) }}> $19.95</Text>
                            /month
                        </Text>

                        <Text style={GlobalStyles.dollertext}>Unlock full Access to your earnings</Text>

                    </View>
                    <View style={GlobalStyles.featureList}>
                        <View style={GlobalStyles.featureItem}>
                            <View style={[
                                GlobalStyles.checkboxs,
                                { backgroundColor: 'black' }
                            ]}>
                                {true && (
                                    <FontAwesome5
                                        name="check"
                                        size={14}
                                        color="green"
                                    />
                                )}
                            </View>
                            <Text style={GlobalStyles.featureText}>Instant Wage Access</Text>
                        </View>

                        <View style={GlobalStyles.featureItem}>
                            <View style={[
                                GlobalStyles.checkboxs,
                                { backgroundColor: 'black' }
                            ]}>
                                {true && (
                                    <FontAwesome5
                                        name="check"
                                        size={14}
                                        color="green"
                                    />
                                )}
                            </View>
                            <Text style={GlobalStyles.featureText}>Global Money Transfers</Text>
                        </View>

                        <View style={GlobalStyles.featureItem}>
                            <View style={[
                                GlobalStyles.checkboxs,
                                { backgroundColor: 'black' }
                            ]}>
                                {true && (
                                    <FontAwesome5
                                        name="check"
                                        size={14}
                                        color="green"
                                    />
                                )}
                            </View>
                            <Text style={GlobalStyles.featureText}>Earn $7,500 Referral Rewards</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 20, gap: 10 }}>
                            <Image
                                source={require('../../../assets/images/GiveHeart.png')}
                                resizeMode="contain"
                                style={{ width: 17, height: 17 }}
                            />
                            <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Giving Back: $1.00 from every subscription goes to Valley Children’s Hospital to support kids in need.</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "center", marginTop: 30, marginBottom: 30 }}>
                        <Text style={GlobalStyles.dollersign}>

                            <Text style={{ fontWeight: 'bold', fontSize: (22) }}>Unlimited Access</Text>

                        </Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 12 }}>Withdraw your earned wages whenever you need them.</Text>



                    </View>
                    <FlatList
                        data={listItems}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            const highlightPhrases = ['No Delays – ', 'Helping Kids'];
                            const match = highlightPhrases.find((phrase) =>
                                item.startsWith(`${phrase}`)
                            );

                            if (match) {
                                const restText = item.slice(match.length + 1).trim();
                                return (
                                    <View style={GlobalStyles.listItem}>
                                        <Text style={GlobalStyles.listItemText}>
                                            <Text style={{ fontWeight: 'bold', color: 'white' }}>{match}</Text>
                                            {restText}
                                        </Text>
                                    </View>
                                );
                            }

                            return (
                                <View style={GlobalStyles.listItem}>
                                    <Text style={GlobalStyles.bullet}>•</Text>
                                    <Text style={GlobalStyles.listItemText}>{item}</Text>
                                </View>
                            );
                        }}

                        style={GlobalStyles.unorderedList}
                    />
                    <View style={{ flexDirection: 'row', gap: 10, marginTop: 30, marginBottom: 66 }}>
                        <FontAwesome5
                            name="check-square"
                            size={17}
                            color="#FFFFFF"
                        />
                        <Text style={{ color: '#FFFFFF' }}>
                            I do not want unlimited daily access to my wages
                        </Text>
                    </View>
                    <NavigateButton
                        title="Continue"
                        onPress={handleNext}
                        accessibilityLabel="PlaidLink screen"
                    />
                                        <View style={{ marginBottom: 16 }} />

                </View>

            </ScrollView>
        </Screen>
    );
};

export default UnlimitedAccess;