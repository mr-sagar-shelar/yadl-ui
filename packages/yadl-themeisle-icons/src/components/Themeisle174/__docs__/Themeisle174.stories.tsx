import type { Meta, StoryObj } from "@storybook/react";
import Themeisle174 from "../Themeisle174";

const meta: Meta<typeof Themeisle174> = { title: "Themeisle/Themeisle174", component: Themeisle174 };

export default meta;
type Story = StoryObj<typeof Themeisle174>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
