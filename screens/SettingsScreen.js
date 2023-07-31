import { Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import { BackButton } from '../components/backButton';
import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { round } from '../components/display';
import { colors } from '../theme';
import { screenIsShort } from '../components/device';

import educationImage from '../assets/categories/education.png';
import entertainmentImage from '../assets/categories/entertainment.png';
import fitnessImage from '../assets/categories/fitness.png';
import mindfulnessImage from '../assets/categories/mindfulness.png';
import motivationImage from '../assets/categories/motivation.png';

export function SettingsScreen() {

    const { width, height } = Dimensions.get('window'), bodyHeight = 0.75 * height,
        marg = 0.02 * height, imgScale = Math.max(25, marg),
        W = 0.9 * width, L = (width - W) / 2;

    var margY = 0.0625 * bodyHeight, margTop = 0.7 * margY
    if (screenIsShort()) { // Dimension Changes For iPhoneSE (Smaller Screen Height)
        margTop = 0.5 * margY;
        margY = marg;
    }

    const [education, setEducation] = useState(0);
    const [entertainment, setEntertainment] = useState(0);
    const [fitness, setFitness] = useState(0);
    const [mindfulness, setMindfulness] = useState(0);
    const [motivation, setMotivation] = useState(0);

    return (
        <ScreenWrapper>
            <View className="flex-row">
                <BackButton />
                <Text style={{ marginBottom: L, marginTop: margTop, marginLeft: 1.5 * L, textAlign: 'center' }} className="font-semibold text-2xl italic">Personalize Your Feed</Text>
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
                        <Text style={{ marginLeft: 2 * L }} className="text-center text-xl font-bold">{"Education: " + round(education)}</Text>
                    </View>
                    <Slider
                        style={{ width: width, height: 0.05 * height }}
                        onValueChange={(value => setEducation(value))}
                        minimumValue={0}
                        maximumValue={5}
                    />
                </View>
                <View style={{ marginTop: margY }}>
                    <View style={{ marginBottom: L, marginLeft: L, backgroundColor: colors.entertainment, width: W }} className="flex-row rounded-full">
                        <Image style={{ marginLeft: L, width: imgScale, height: imgScale, marginRight: marg }} source={entertainmentImage} />
                        <Text style={{ marginLeft: 2 * L }} className="text-center text-xl font-bold">{"Entertainment: " + round(entertainment)}</Text>
                    </View>
                    <Slider
                        style={{ width: width, height: 0.05 * height }}
                        onValueChange={(value => setEntertainment(value))}
                        minimumValue={0}
                        maximumValue={5}
                    />
                </View>
                <View style={{ marginTop: margY }}>
                    <View style={{ marginBottom: L, marginLeft: L, backgroundColor: colors.fitness, width: W }} className="flex-row rounded-full">
                        <Image style={{ marginLeft: L, width: imgScale, height: imgScale, marginRight: marg }} source={fitnessImage} />
                        <Text style={{ marginLeft: 2 * L }} className="text-center text-xl font-bold">{"Fitness: " + round(fitness)}</Text>
                    </View>
                    <Slider
                        style={{ width: width, height: 0.05 * height }}
                        onValueChange={(value => setFitness(value))}
                        minimumValue={0}
                        maximumValue={5}
                    />
                </View>
                <View style={{ marginTop: margY }}>
                    <View style={{ marginBottom: L, marginLeft: L, backgroundColor: colors.mindfulness, width: W }} className="flex-row rounded-full">
                        <Image style={{ marginLeft: L, width: imgScale, height: imgScale, marginRight: marg }} source={mindfulnessImage} />
                        <Text style={{ marginLeft: 2 * L }} className="text-center text-xl font-bold">{"Mindfulness: " + round(mindfulness)}</Text>
                    </View>
                    <Slider
                        style={{ width: width, height: 0.05 * height }}
                        onValueChange={(value => setMindfulness(value))}
                        minimumValue={0}
                        maximumValue={5}
                    />
                </View>
                <View style={{ marginTop: margY }}>
                    <View style={{ marginBottom: L, marginLeft: L, backgroundColor: colors.motivation, width: W }} className="flex-row rounded-full">
                        <Image style={{ marginLeft: L, width: imgScale, height: imgScale, marginRight: marg }} source={motivationImage} />
                        <Text style={{ marginLeft: 2 * L }} className="text-center text-xl font-bold">{"Motivation: " + round(motivation)}</Text>
                    </View>
                    <Slider
                        style={{ width: width, height: 0.05 * height }}
                        onValueChange={(value => setMotivation(value))}
                        minimumValue={0}
                        maximumValue={5}
                    />
                </View>
            </View>
            <View>
                <TouchableOpacity style={{ marginLeft: 0.25 * width, marginTop: marg, alignContent: 'center', width: 0.5 * width, backgroundColor: colors.saveChanges }} className="rounded-full shadow-sm">
                    <Text className="text-center text-lg font-bold">Save Changes</Text>
                </TouchableOpacity>
            </View>
        </ScreenWrapper>
    );
}
