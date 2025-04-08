import type { Meta, StoryObj } from "@storybook/react";
import Themeisle376 from "../Themeisle376";

const meta: Meta<typeof Themeisle376> = { title: "Themeisle/Themeisle376", component: Themeisle376 };

export default meta;
type Story = StoryObj<typeof Themeisle376>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
