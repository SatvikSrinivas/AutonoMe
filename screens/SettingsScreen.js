import { Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import { BackButton } from '../components/backButton';
import Slider from '@react-native-community/slider';
import { useState, useEffect } from 'react';
import { round } from '../components/display';
import { colors } from '../theme';
import { screenIsShort } from '../components/device';
import { auth } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ratingsRef } from '../config/firebase';
import { Loading } from '../components/loading';
import { useNavigation } from '@react-navigation/native';

import educationImage from '../assets/categories/education.png';
import entertainmentImage from '../assets/categories/entertainment.png';
import fitnessImage from '../assets/categories/fitness.png';
import mindfulnessImage from '../assets/categories/mindfulness.png';
import motivationImage from '../assets/categories/motivation.png';

export function SettingsScreen() {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window'), bodyHeight = 0.75 * height,
        marg = 0.02 * height, imgScale = Math.max(25, marg),
        W = 0.9 * width, L = (width - W) / 2;

    var margY = 0.0625 * bodyHeight, margTop = 0.7 * margY
    if (screenIsShort()) { // Dimension Changes For iPhoneSE (Smaller Screen Height)
        margTop = 0.5 * margY;
        margY = marg;
    }

    const [ratings, setRatings] = useState(null);
    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setRatings((await getDoc(doc(ratingsRef, auth.currentUser.uid))).data());
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const [education, setEducation] = useState(0);
    const [entertainment, setEntertainment] = useState(0);
    const [fitness, setFitness] = useState(0);
    const [mindfulness, setMindfulness] = useState(0);
    const [motivation, setMotivation] = useState(0);

    if (ratings === null) {
        return (
            <View style={{ alignItems: 'center', marginTop: 0.4 * height }}>
                <Text className="text-center my-7 font-semibold text-2xl italic">Employ Your AutonoMe</Text>
                <Loading />
            </View>
        )
    }
    else {
        if (firstRender) {
            setEducation(ratings.education);
            setEntertainment(ratings.entertainment);
            setFitness(ratings.fitness);
            setMindfulness(ratings.mindfulness);
            setMotivation(ratings.motivation);
            setFirstRender(false);
        }

        const saveRatings = async () => {
            setDoc(doc(ratingsRef, auth.currentUser.uid),
                {
                    education: education,
                    entertainment: entertainment,
                    fitness: fitness,
                    mindfulness: mindfulness,
                    motivation: motivation
                });
            navigation.goBack();
        }
        return (
            <ScreenWrapper>
                <View className="flex-row">
                    <BackButton />
                    <Text style={{ marginBottom: L, marginTop: margTop, marginLeft: 1.5 * L, textAlign: 'center' }} className="font-semibold text-2xl italic">Employ Your AutonoMe</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width,
                    height: bodyHeight,
                    backgroundColor: '#FFFFFF',
                    marginTop: marg
                }}>
                    <View>
                        <View style={{ marginBottom: L, marginLeft: L, backgroundColor: colors.education, width: W }} className="flex-row rounded-full">
                            <Image style={{ marginLeft: L, width: imgScale, height: imgScale, marginRight: marg }} source={educationImage} />
                            <Text style={{ marginLeft: 2 * L }} className="text-center text-xl font-bold">{"Education: " + education}</Text>
                        </View>
                        <Slider
                            value={education}
                            step={0.1}
                            style={{ width: width, height: 0.05 * height }}
                            onValueChange={(value => setEducation(round(value)))}
                            minimumValue={0}
                            maximumValue={5}
                        />
                    </View>
                    <View style={{ marginTop: margY }}>
                        <View style={{ marginBottom: L, marginLeft: L, backgroundColor: colors.entertainment, width: W }} className="flex-row rounded-full">
                            <Image style={{ marginLeft: L, width: imgScale, height: imgScale, marginRight: marg }} source={entertainmentImage} />
                            <Text style={{ marginLeft: 2 * L }} className="text-center text-xl font-bold">{"Entertainment: " + entertainment}</Text>
                        </View>
                        <Slider
                            value={entertainment}
                            step={0.1}
                            style={{ width: width, height: 0.05 * height }}
                            onValueChange={(value => setEntertainment(round(value)))}
                            minimumValue={0}
                            maximumValue={5}
                        />
                    </View>
                    <View style={{ marginTop: margY }}>
                        <View style={{ marginBottom: L, marginLeft: L, backgroundColor: colors.fitness, width: W }} className="flex-row rounded-full">
                            <Image style={{ marginLeft: L, width: imgScale, height: imgScale, marginRight: marg }} source={fitnessImage} />
                            <Text style={{ marginLeft: 2 * L }} className="text-center text-xl font-bold">{"Fitness: " + fitness}</Text>
                        </View>
                        <Slider
                            value={fitness}
                            step={0.1}
                            style={{ width: width, height: 0.05 * height }}
                            onValueChange={(value => setFitness(round(value)))}
                            minimumValue={0}
                            maximumValue={5}
                        />
                    </View>
                    <View style={{ marginTop: margY }}>
                        <View style={{ marginBottom: L, marginLeft: L, backgroundColor: colors.mindfulness, width: W }} className="flex-row rounded-full">
                            <Image style={{ marginLeft: L, width: imgScale, height: imgScale, marginRight: marg }} source={mindfulnessImage} />
                            <Text style={{ marginLeft: 2 * L }} className="text-center text-xl font-bold">{"Mindfulness: " + mindfulness}</Text>
                        </View>
                        <Slider
                            value={mindfulness}
                            step={0.1}
                            style={{ width: width, height: 0.05 * height }}
                            onValueChange={(value => setMindfulness(round(value)))}
                            minimumValue={0}
                            maximumValue={5}
                        />
                    </View>
                    <View style={{ marginTop: margY }}>
                        <View style={{ marginBottom: L, marginLeft: L, backgroundColor: colors.motivation, width: W }} className="flex-row rounded-full">
                            <Image style={{ marginLeft: L, width: imgScale, height: imgScale, marginRight: marg }} source={motivationImage} />
                            <Text style={{ marginLeft: 2 * L }} className="text-center text-xl font-bold">{"Motivation: " + motivation}</Text>
                        </View>
                        <Slider
                            value={motivation}
                            step={0.1}
                            style={{ width: width, height: 0.05 * height }}
                            onValueChange={(value => setMotivation(round(value)))}
                            minimumValue={0}
                            maximumValue={5}
                        />
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={saveRatings} style={{ marginLeft: 0.25 * width, marginTop: marg, alignContent: 'center', width: 0.5 * width, backgroundColor: colors.saveChanges }} className="rounded-full shadow-sm">
                        <Text className="text-center text-lg font-bold">Save Changes</Text>
                    </TouchableOpacity>
                </View>
            </ScreenWrapper>
        );
    }
}
