function augmentingPath(graph, start, end, visit = [], path = []) {
    path.push(start);

    if(start == end) {
        return path;
    }

    visit.push(start);

    for(var key in graph[start]) {
        if(!visit.includes(key) || !path.includes(key)) {
            if(key == end) {
                path.push(key);
                return path;
            }
            visit.push(key);

            var newAugmentingPath = augmentingPath(graph, key, end, visit, path);

            if(newAugmentingPath.length > 0) {
                return newAugmentingPath;
            }

            path = []

            path.push(start);
        }
    }

    return [];
}
