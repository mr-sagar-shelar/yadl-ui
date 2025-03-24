import type { Meta, StoryObj } from "@storybook/react";
import Sentiment_analysisSentimentAnalysis from "../Sentiment_analysisSentimentAnalysis";

const meta: Meta<typeof Sentiment_analysisSentimentAnalysis> = { title: "unDraw/Sentiment_analysisSentimentAnalysis", component: Sentiment_analysisSentimentAnalysis };

export default meta;
type Story = StoryObj<typeof Sentiment_analysisSentimentAnalysis>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
