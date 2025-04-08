import type { Meta, StoryObj } from "@storybook/react";
import OnlineOrganizer from "../OnlineOrganizer";

const meta: Meta<typeof OnlineOrganizer> = { title: "unDraw/OnlineOrganizer", component: OnlineOrganizer };

export default meta;
type Story = StoryObj<typeof OnlineOrganizer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
