import type { Meta, StoryObj } from "@storybook/react";
import JourneyHub from "../JourneyHub";

const meta: Meta<typeof JourneyHub> = { title: "Azure/General/JourneyHub", component: JourneyHub };

export default meta;
type Story = StoryObj<typeof JourneyHub>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
