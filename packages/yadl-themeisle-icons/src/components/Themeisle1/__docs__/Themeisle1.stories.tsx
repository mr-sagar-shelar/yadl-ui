import type { Meta, StoryObj } from "@storybook/react";
import Themeisle1 from "../Themeisle1";

const meta: Meta<typeof Themeisle1> = { title: "Themeisle/Themeisle1", component: Themeisle1 };

export default meta;
type Story = StoryObj<typeof Themeisle1>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
