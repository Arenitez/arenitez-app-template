import { createAreniteStyle, FlatList, Image, Text, VStack } from 'arenite-kit';

const listDatasets = new Array(10).fill(0).map((_, i) => ({ id: i }));

export const FlatListExample = () => {
  return (
    <VStack gap={12}>
      <Text style={style.title} color={'color1'}>
        FlatList
      </Text>

      <FlatList<{ id: number }>
        keyExtractor={(item) => item.id.toString()}
        data={listDatasets}
        horizontal={true}
        renderItem={() => {
          return (
            <Image
              source={require('assets/images/arenitez.png')}
              style={style.brandLogo}
              width={60}
              height={60}
              bg={'secondary'}
            />
          );
        }}
      />
    </VStack>
  );
};

const style = createAreniteStyle({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  brandLogo: {
    borderRadius: 8,
    marginRight: 8,
  },
});
