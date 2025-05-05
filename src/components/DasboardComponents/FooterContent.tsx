import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from '../../css/footerpart';
const BottomPart = () => {
    return (
        <View style={styles.bottomContainer}>
            <Text style={styles.benefitsTitle}>STUSH PAY BENEFITS:</Text>

            <View style={styles.benefitsList}>
                <View style={styles.benefitItem}>
                    <Text style={styles.benefitText}>
                        Why Wait for Payday? <Text style={{ fontWeight: 'bold' }}>Flexible Withdrawals.</Text>{'\n'}
                        Users can take out as much or as little as they
                        need!
                    </Text>
                </View>
                <View style={styles.benefitItem}>
                    <Text style={styles.benefitTexts}>
                         No Hidden Fees.
                    </Text>
                </View>

                <View style={styles.benefitItem}>
                    <Text style={styles.benefitText}>
                        Financial Growth & Education  <Text style={{ fontWeight: 'bold' }}> - Smart Money
                        Tips.</Text>
                    </Text>
                </View>

                <View style={styles.benefitItem}>
                    <Text style={styles.benefitTexts}>
                         Learn More with Stush Pay.
                    </Text>
                </View>
            </View>

            <View style={styles.charityContainer}>
                <Image
                    source={require('../../../assets/images/childrens.png')}
                    style={styles.charityLogo}
                    resizeMode="contain"
                />

                <Text style={styles.charityTitle}>GIVING BACK:</Text>
                <Text style={styles.charityName}>VALLEY CHILDREN'S HOSPITAL</Text>

                <Text style={styles.charityDescription}>
                    Your subscription helps raise <Text style={{ fontWeight: 'bold' }}> $50,000 </Text> for children!
                </Text>

                <TouchableOpacity style={styles.learnMoreButton}>
                    <Text style={styles.learnMoreButtonText}>Learn How We Give Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default BottomPart;