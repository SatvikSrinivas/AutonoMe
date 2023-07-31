import { Text, View, Dimensions, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import { BackButton } from '../components/backButton';
import { colors } from '../theme';
import { useState } from 'react';

var categories = [{
    id: 1,
    name: 'Education',
    color: colors.education,
    image: 'education.png'
}, {
    id: 2,
    name: 'Entertainment',
    color: colors.entertainment,
    image: 'entertainment.png'
}, {
    id: 3,
    name: 'Fitness',
    color: colors.fitness,
    image: 'fitness.png'
}, {
    id: 4,
    name: 'Mindfulness',
    color: colors.mindfulness,
    image: 'mindfulness.png'
}, {
    id: 5,
    name: 'Motivation',
    color: colors.motivation,
    image: 'motivation.png'
}, {
    id: 6,
    name: 'Random',
    color: colors.random,
    image: 'random.png'
}]

import educationImage from '../assets/categories/education.png';
import entertainmentImage from '../assets/categories/entertainment.png';
import fitnessImage from '../assets/categories/fitness.png';
import mindfulnessImage from '../assets/categories/mindfulness.png';
import motivationImage from '../assets/categories/motivation.png';
import randomImage from '../assets/categories/random.png';
import { screenIsShort } from '../components/device';

const categoryImages = {
    Education: educationImage,
    Entertainment: entertainmentImage,
    Fitness: fitnessImage,
    Mindfulness: mindfulnessImage,
    Motivation: motivationImage,
    Random: randomImage,
};

export function SearchScreen() {
    const { width, height } = Dimensions.get('window');
    const [search, setSearch] = useState("Search...");
    const numCols = 2, imgScale = 0.6;
    const imgSize = imgScale * ((width - (numCols + 1) * 0.05 * width) / numCols);

    var marg = 0.5 * imgSize, margY = 0.25 * imgSize, slightOffset = 0.4 * margY;
    if (screenIsShort()) {
        marg = 0.525 * imgSize;
        margY = 0.15 * imgSize;
        slightOffset = -0.25 * marg
    }

    return (
        <ScreenWrapper>
            <View style={{ marginTop: slightOffset }} className="flex-row">
                <BackButton />
                <Text style={{ marginBottom: margY, marginTop: margY, marginLeft: 1.5 * marg, textAlign: 'center' }} className="font-bold text-4xl">Explore</Text>
            </View>
            <View className="space-y-1 mx-2 my-2">
                <TextInput value={search} onChangeText={value => setSearch(value)} className={`${colors.heading} p-4 bg-white rounded-full mb-3`} />
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: width,
                height: 0.7 * height,
                backgroundColor: '#FFFFFF'
            }}>
                <FlatList
                    data={categories}
                    numColumns={numCols}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{
                        justifyContent: 'space-between'
                    }}
                    className="mx-1"
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity className="rounded-full" style={{ backgroundColor: item.color, marginVertical: 0.05 * height, marginHorizontal: 0.1 * width }}>
                                <View>
                                    <Image style={{ width: imgSize, height: imgSize }} source={categoryImages[item.name]} />
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </ScreenWrapper >
    );
}
