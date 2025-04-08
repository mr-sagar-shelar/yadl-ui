import type { Meta, StoryObj } from "@storybook/react";
import S3onOutposts from "../S3onOutposts";

const meta: Meta<typeof S3onOutposts> = { title: "AWS/Storage/S3onOutposts", component: S3onOutposts };

export default meta;
type Story = StoryObj<typeof S3onOutposts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
