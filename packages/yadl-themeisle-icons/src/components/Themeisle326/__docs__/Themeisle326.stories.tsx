import type { Meta, StoryObj } from "@storybook/react";
import Themeisle326 from "../Themeisle326";

const meta: Meta<typeof Themeisle326> = { title: "Themeisle/Themeisle326", component: Themeisle326 };

export default meta;
type Story = StoryObj<typeof Themeisle326>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
