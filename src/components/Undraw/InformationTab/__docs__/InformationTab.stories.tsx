import type { Meta, StoryObj } from "@storybook/react";
import InformationTab from "../InformationTab";

const meta: Meta<typeof InformationTab> = { title: "unDraw/InformationTab", component: InformationTab };

export default meta;
type Story = StoryObj<typeof InformationTab>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
