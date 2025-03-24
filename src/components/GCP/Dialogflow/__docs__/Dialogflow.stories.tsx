import type { Meta, StoryObj } from "@storybook/react";
import Dialogflow from "../Dialogflow";

const meta: Meta<typeof Dialogflow> = { title: "GCP/Dialogflow", component: Dialogflow };

export default meta;
type Story = StoryObj<typeof Dialogflow>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
