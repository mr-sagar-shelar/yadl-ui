import type { Meta, StoryObj } from "@storybook/react";
import Special_eventSpecialEvent from "../Special_eventSpecialEvent";

const meta: Meta<typeof Special_eventSpecialEvent> = { title: "unDraw/Special_eventSpecialEvent", component: Special_eventSpecialEvent };

export default meta;
type Story = StoryObj<typeof Special_eventSpecialEvent>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
