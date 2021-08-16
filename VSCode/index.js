

let width = 400;
let height = 400;
var yourVlSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "A simple bar chart with embedded data.",
    "data": { "url": "data2.csv" },
    "title": { "text": "A Simple Scatter Chart", "fontSize": 30 },
    "width": 400,
    "height": 400,
    "layer": [
        {
            "mark": { "type": "point", "tooltip": { "content": "data" } },
            "encoding": {
                "x": {
                    "field": "Adapter",
                    "type": "quantitative",
                    "axis": { "title": "BLEU scores on Adapter model" }
                },
                "y": {
                    "field": "Transformer",
                    "type": "quantitative",
                    "axis": { "title": "BLEU scores on Transformer model" }
                },
                "color": { "field": "item", "type": "nominal" },
                "fill": { "field": "item", "type": "nominal" },
                "shape": { "field": "item", "type": "nominal" },
                "size": { "value": 200 },
                "opacity": { "value": 0.7 }
            }
        },
        {
            "mark": { "type": "rule", "color": "lightgray", "strokeDash": [8, 8] },
            "encoding": {
                "y": { "value": 400 },
                "x": { "value": 0 },
                "y2": { "value": 0 },
                "x2": { "value": 400 }
            }
        },
        {


            "mark": {
                "type": "text", "align": "center",
                "baseline": "middle",
                "dy": -12
            },
            "encoding": {
                "x": {
                    "field": "Adapter",
                    "type": "quantitative",
                    "axis": { "title": "BLEU scores on Adapter model" }
                },
                "y": {
                    "field": "Transformer",
                    "type": "quantitative",
                    "axis": { "title": "BLEU scores on Transformer model" }
                },
                "text": { "field": "item" }
            }
        }
    ]
}
vegaEmbed("#line", yourVlSpec);
yourVlSpec =
{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "A simple bar chart with embedded data.",
    "data": { "url": "data1.csv" },
    "title": { "text": "A Simple Scatter Chart", "fontSize": 30 },
    "width": 400,
    "height": 400,
    "transform": [
        {
            "fold": [
                "Meta-MT-0",
                "Fine-Turing-on-Task",
                "Classical-Fine-Tune-Baseline",
                "Meta-MT"
            ]
        },
        { "pivot": "item", "value": "value", "groupby": ["key"] }
    ],
    "layer": [
        {
            "mark": { "type": "point", "tooltip": { "content": "data" } },
            "encoding": {
                "x": {
                    "field": "Adapter",
                    "type": "quantitative",
                    "axis": { "title": "BLEU scores on Adapter model" }
                },
                "y": {
                    "field": "Transformer",
                    "type": "quantitative",
                    "axis": { "title": "BLEU scores on Transformer model" }
                },
                "color": { "field": "key", "type": "nominal" },
                "fill": { "field": "key", "type": "nominal" },
                "shape": { "field": "key", "type": "nominal" },
                "size": { "value": 200 },
                "opacity": { "value": 0.7 }
            }
        },
        {
            "mark": { "type": "rule", "color": "lightgray", "strokeDash": [8, 8] },
            "encoding": {
                "y": { "value": 400 },
                "x": { "value": 0 },
                "y2": { "value": 0 },
                "x2": { "value": 400 }
            }
        },
        {
            "mark": {
                "type": "text", "align": "center",
                "baseline": "middle",
                "dy": -12
            },
            "encoding": {
                "x": {
                    "field": "Adapter",
                    "type": "quantitative",
                    "axis": { "title": "BLEU scores on Adapter model" }
                },
                "y": {
                    "field": "Transformer",
                    "type": "quantitative",
                    "axis": { "title": "BLEU scores on Transformer model" }
                },
                "text": { "field": "key" }
            }
        }
    ]
}
vegaEmbed("#line2", yourVlSpec);
