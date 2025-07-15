export type Comment = {
    id: number
    companyName: string
    companyLogo?: string
    text: string
    authorName: string
    authorLogoImg?: string
    authorJobTitle: string
}

type CommentCardProps = {
    comment: Comment
}

export function CommentCard({ comment }: CommentCardProps) {
    return (
        <div className="w-[379px] h-[502px] border border-[#B6B1B1] ml-3 rounded-[16px]">
            {comment.companyLogo && (
                <img
                    src={comment.companyLogo}
                    alt={`${comment.companyName} logo`}
                    className="company-logo"
                />
            )}
            <h3 className="">{comment.companyName}</h3>
            {comment.authorLogoImg && (
                <img
                    src={comment.authorLogoImg}
                    alt={`${comment.authorName} logo`}
                    className="author-logo"
                />
            )}
            <p className="">{comment.authorName}</p>
            <p className="">{comment.authorJobTitle}</p>
        </div>
    )
}
