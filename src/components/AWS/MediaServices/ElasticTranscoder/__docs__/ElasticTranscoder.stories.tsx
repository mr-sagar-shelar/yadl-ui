import type { Meta, StoryObj } from "@storybook/react";
import ElasticTranscoder from "../ElasticTranscoder";

const meta: Meta<typeof ElasticTranscoder> = { title: "AWS/MediaServices/ElasticTranscoder", component: ElasticTranscoder };

export default meta;
type Story = StoryObj<typeof ElasticTranscoder>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
